import { authApi } from '../auth/auth.api';
import { fileUploadApi } from '../file-upload/file-upload.api';
import { expansionApi } from '../masters/expansion.api';
import { typesApi } from '../masters/types.api';

const middleWares = [
  authApi.middleware,
  expansionApi.middleware,
  typesApi.middleware,
  fileUploadApi.middleware,
];

export default middleWares;
