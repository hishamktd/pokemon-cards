import { Slider, Button } from '@mui/material';
import React, { useState, useCallback, FC } from 'react';

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
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string | ArrayBuffer);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
  });

  const onCropComplete = useCallback((_: Any, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    try {
      if (!imageSrc || !croppedAreaPixels) {
        return;
      }

      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onChange(croppedImage);
      setImageSrc(null);
    } catch (error) {
      console.error('Cropping failed:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {!imageSrc ? (
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
      ) : (
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
      )}
      {value && (
        <div style={{ marginTop: '20px' }}>
          <h3>Saved Image:</h3>
          <Image
            src={value}
            alt="Cropped"
            width={cropWidth}
            height={cropHeight}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default FileUploader;
