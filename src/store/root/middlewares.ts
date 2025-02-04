import { authApi } from '../auth/auth.api';

const middleWares = [authApi.middleware];

export default middleWares;
