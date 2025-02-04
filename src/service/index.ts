import { AxiosInstance } from 'axios';

import { api } from '@/lib/interceptor/api';
import { authApi } from '@/lib/interceptor/auth';

class ApiService {
  public api: AxiosInstance;
  public authApi: AxiosInstance;

  constructor() {
    this.api = api;
    this.authApi = authApi;
  }
}

export default ApiService;
