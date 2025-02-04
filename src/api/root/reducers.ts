import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from '../auth/auth.api';
import { expansionApi } from '../masters/expansion.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [expansionApi.reducerPath]: expansionApi.reducer,
});

export default rootReducer;
