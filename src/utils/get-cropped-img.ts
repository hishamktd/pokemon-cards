interface CroppedAreaPixels {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function getCroppedImg(
  imageSrc: string | ArrayBuffer,
  croppedAreaPixels: CroppedAreaPixels,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    if (typeof imageSrc === 'string') {
      image.src = imageSrc;
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        image.src = reader.result as string;
      };
      reader.readAsDataURL(new Blob([imageSrc]));
    }
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      const ctx = canvas.getContext('2d');

      ctx?.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        const fileUrl = URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg');
    };
    image.onerror = reject;
  });
}
