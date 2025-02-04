import { authApi } from '../auth/auth.api';
import { expansionApi } from '../masters/expansion.api';
import { typesApi } from '../masters/types.api';

const middleWares = [
  authApi.middleware,
  expansionApi.middleware,
  typesApi.middleware,
];

export default middleWares;
