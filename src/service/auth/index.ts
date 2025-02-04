import { LoginParams } from '@/types/auth';

import ApiService from '..';

class AuthService extends ApiService {
  readonly baseUrl = '/auth';

  constructor() {
    super();
  }

  login(params: LoginParams) {
    return this.authApi.post(`${this.baseUrl}/login`, params);
  }

  register(params: LoginParams) {
    return this.authApi.post(`${this.baseUrl}/register`, params);
  }

  validateToken() {
    return this.authApi.get(`${this.baseUrl}/validate`);
  }
}

export default AuthService;
