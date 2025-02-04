import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '../auth/auth.api';
import { expansionApi } from '../masters/expansion.api';
import { typesApi } from '../masters/types.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [expansionApi.reducerPath]: expansionApi.reducer,
  [typesApi.reducerPath]: typesApi.reducer,
});

export default rootReducer;
