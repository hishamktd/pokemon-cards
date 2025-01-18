import { put } from '@vercel/blob';

type FileOptions = {
  imageUrl?: string | null;
  path?: string;
  name?: string;
};

const uploadFile = async (file: File | null, options?: FileOptions) => {
  const { imageUrl = null, path = '', name = '' } = options || {};

  console.log('imageUrl', imageUrl);

  console.log('file 2345yuhgfd', file);

  if (!file) {
    if (imageUrl) {
      return imageUrl;
    } else {
      return null;
    }
  }
  const blob = await put(`${path}/${name}`, file, {
    access: 'public',
    addRandomSuffix: true,
    contentType: file.type,
  });

  console.log('blob', blob);

  return blob.url;
};

export default uploadFile;
