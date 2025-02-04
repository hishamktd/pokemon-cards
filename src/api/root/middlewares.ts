import { authApi } from '../auth/auth.api';
import { expansionApi } from '../masters/expansion.api';

const middleWares = [authApi.middleware, expansionApi.middleware];

export default middleWares;
