import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '../auth/auth.api';
import { fileUploadApi } from '../file-upload/file-upload.api';
import { expansionApi } from '../masters/expansion.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [expansionApi.reducerPath]: expansionApi.reducer,
  [fileUploadApi.reducerPath]: fileUploadApi.reducer,
});

export default rootReducer;
