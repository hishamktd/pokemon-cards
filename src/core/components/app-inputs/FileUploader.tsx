import { Slider, Button } from '@mui/material';
import React, { useState, useCallback, FC, memo } from 'react';

import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import Cropper, { Area } from 'react-easy-crop';
import { useController } from 'react-hook-form';

import { Any } from '@/types';
import getCroppedImg from '@/utils/get-cropped-img';

import { FileUploaderProps } from './types';

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
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
    ),
    [getRootProps, getInputProps],
  );

  const renderCropper = useCallback(
    () => (
      <>
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <Cropper
            image={imageSrc as string}
            crop={crop}
            zoom={zoom}
            aspect={cropWidth / cropHeight}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
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
      <div
        style={{
          marginTop: '20px',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <Image
          src={value}
          alt="Cropped"
          width={cropWidth}
          height={cropHeight}
          style={{
            objectFit: 'cover',
            filter: 'blur(0)',
            transition: 'filter 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'blur(5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'blur(0)';
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'none',
            pointerEvents: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.display = 'block';
            e.currentTarget.style.pointerEvents = 'all';
            e.currentTarget.style.zIndex = '100';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.style.pointerEvents = 'none';
          }}
        >
          Clear
        </Button>
      </div>
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
