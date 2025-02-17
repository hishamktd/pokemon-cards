import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '../auth/auth.api';
import { fileUploadApi } from '../file-upload/file-upload.api';
import { expansionApi } from '../masters/expansion.api';
import { typesApi } from '../masters/types.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [expansionApi.reducerPath]: expansionApi.reducer,
  [typesApi.reducerPath]: typesApi.reducer,
  [fileUploadApi.reducerPath]: fileUploadApi.reducer,
});

export default rootReducer;
