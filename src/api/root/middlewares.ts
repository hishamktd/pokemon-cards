import { authApi } from '../auth/auth.api';
import { fileUploadApi } from '../file-upload/file-upload.api';
import { expansionApi } from '../masters/expansion.api';

const middleWares = [
  authApi.middleware,
  expansionApi.middleware,
  fileUploadApi.middleware,
];

export default middleWares;
