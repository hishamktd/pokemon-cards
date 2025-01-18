import { Slider, Button } from '@mui/material';
import React, { useState, useCallback, FC, memo } from 'react';

import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import Cropper, { Area } from 'react-easy-crop';
import { useController } from 'react-hook-form';

import { Any } from '@/types';
import getCroppedImg from '@/utils/get-cropped-img';

import {
  CropperContainer,
  DropZoneInputContainer,
  ImagePreviewContainer,
} from './styled-component';
import { FileUploaderProps } from './types';
import { AppButton } from '../app-button';

const FileUploader: FC<FileUploaderProps> = ({
  control,
  name,
  cropWidth = 200,
  cropHeight = 200,
}) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result as string | ArrayBuffer);
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
  });

  const onCropComplete = useCallback((_: Any, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onChange(croppedImage);
      setImageSrc(null);
    } catch (error) {
      console.error('Cropping failed:', error);
    }
  }, [imageSrc, croppedAreaPixels, onChange]);

  const handleClearImage = useCallback(() => {
    onChange(null);
  }, [onChange]);

  const renderDropzone = useCallback(
    () => (
      <DropZoneInputContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </DropZoneInputContainer>
    ),
    [getRootProps, getInputProps],
  );

  const renderCropper = useCallback(
    () => (
      <>
        <CropperContainer>
          <Cropper
            image={imageSrc as string}
            crop={crop}
            zoom={zoom}
            aspect={cropWidth / cropHeight}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </CropperContainer>
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          onChange={(e, zoom) => setZoom(zoom as number)}
          style={{ margin: '20px 0' }}
        />
        <Button variant="contained" color="primary" onClick={handleCrop}>
          Crop & Save
        </Button>
      </>
    ),
    [imageSrc, crop, zoom, cropWidth, cropHeight, onCropComplete, handleCrop],
  );

  const renderSavedImage = useCallback(
    () => (
      <ImagePreviewContainer>
        <Image
          src={value}
          alt="Cropped"
          width={cropWidth}
          height={cropHeight}
          className="cropped-image"
        />
        <AppButton
          color="secondary"
          onClick={handleClearImage}
          className="clear-button"
        >
          Clear
        </AppButton>
      </ImagePreviewContainer>
    ),
    [value, cropWidth, cropHeight, handleClearImage],
  );

  return (
    <div style={{ textAlign: 'center' }}>
      {!value && (imageSrc ? renderCropper() : renderDropzone())}
      {value && renderSavedImage()}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default memo(FileUploader);
