import { useCallback } from 'react';

import { useUploadFileMutation } from '@/api/file-upload/file-upload.api';

type Props = {
  path?: string;
};

const useFileUpload = ({ path = 'default' }: Props) => {
  const [uploadFile, { isLoading }] = useUploadFileMutation();

  const upload = useCallback(
    async (file: File | null, imageUrl?: string | null, name?: string) => {
      if (!file) return imageUrl ?? '';

      const formData = new FormData();
      formData.append('file', file);
      formData.append('path', path);
      formData.append('name', name ?? file?.name);
      const response = await uploadFile(formData);
      return response.data;
    },
    [uploadFile, path],
  );

  return { upload, fileUploading: isLoading };
};

export default useFileUpload;
