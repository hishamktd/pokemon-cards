import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '../auth/auth.api';
import { fileUploadApi } from '../file-upload/file-upload.api';
import { expansionApi } from '../masters/expansion.api';
import { typesApi } from '../masters/types.api';
import { pokemonApi } from '../pokemon/pokemon.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [expansionApi.reducerPath]: expansionApi.reducer,
  [fileUploadApi.reducerPath]: fileUploadApi.reducer,
  [typesApi.reducerPath]: typesApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default rootReducer;
