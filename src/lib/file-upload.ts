import { put } from '@vercel/blob';

type FileOptions = {
  imageUrl: string | null;
  path: string;
};

const defaultOptions: FileOptions = { imageUrl: null, path: '' };

const uploadFile = async (
  file: File | null,
  options: FileOptions = defaultOptions,
) => {
  if (!file) {
    if (options.imageUrl) {
      return options.imageUrl;
    } else {
      return null;
    }
  }
  const blob = await put(`${options.path}/${file.name}`, file, {
    access: 'public',
    addRandomSuffix: true,
  });

  return blob.url;
};

export default uploadFile;
