import { Slider, Button } from '@mui/material';
import React, { useState, useCallback, FC, memo, useEffect } from 'react';

import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import Cropper, { Area } from 'react-easy-crop';
import { useController } from 'react-hook-form';

import { Any } from '@/types';
import { isValidUrl } from '@/utils/common';
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
  imageUrl = null,
}) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: imageUrl ?? null,
  });

  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(
    imageUrl,
  );
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  useEffect(() => {
    if (imageUrl) {
      if (typeof imageUrl === 'string') {
        try {
          new URL(imageUrl);
          onChange(imageUrl);
          setImageSrc(imageUrl);
        } catch {
          onChange(null);
          setImageSrc(null);
        }
      } else {
        onChange(imageUrl);
        setImageSrc(imageUrl);
      }
    } else {
      onChange(null);
      setImageSrc(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

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
      const url = await getCroppedImg(imageSrc, croppedAreaPixels);
      const file = new File(
        [await fetch(url).then((r) => r.blob())],
        `${name || 'image'}.jpg`,
        { type: 'image/jpeg' },
      );

      onChange(file);
      setImageSrc(url);
    } catch (error) {
      console.error('Cropping failed:', error);
    }
  }, [imageSrc, croppedAreaPixels, onChange, name]);

  const handleClearImage = useCallback(() => {
    onChange(null);
    setImageSrc(null);
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

  const renderSavedImage = useCallback(() => {
    const imageUrl =
      isValidUrl(value) || typeof value === 'string'
        ? value
        : URL.createObjectURL(value);

    return (
      <ImagePreviewContainer>
        {value &&
          (typeof value === 'string' && isValidUrl(value) ? (
            <Image
              src={value}
              alt="Cropped"
              width={cropWidth}
              height={cropHeight}
              className="cropped-image"
            />
          ) : (
            <Image
              src={imageUrl}
              alt="Cropped"
              width={cropWidth}
              height={cropHeight}
              className="cropped-image"
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          ))}
        <AppButton
          color="secondary"
          onClick={handleClearImage}
          className="clear-button"
        >
          Clear
        </AppButton>
      </ImagePreviewContainer>
    );
  }, [value, handleClearImage, cropWidth, cropHeight]);

  return (
    <div style={{ textAlign: 'center', width: '100%', maxWidth: '100%' }}>
      {!value && (imageSrc ? renderCropper() : renderDropzone())}
      {value && renderSavedImage()}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default memo(FileUploader);
