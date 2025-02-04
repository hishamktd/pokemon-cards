import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { defaultUser } from '@/constants/auth';
import AuthService from '@/service/auth';
import { LoginParams, AuthResponse, User } from '@/types/auth';
import { getInitialState } from '@/utils/reducer-utils';

const authService = new AuthService();

export const login = createAsyncThunk<AuthResponse, LoginParams>(
  'auth/login',
  async (credentials: LoginParams, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const register = createAsyncThunk<AuthResponse, LoginParams>(
  'auth/register',
  async (credentials: LoginParams, { rejectWithValue }) => {
    try {
      const response = await authService.register(credentials);
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const validateToken = createAsyncThunk<AuthResponse, void>(
  'auth/validateToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.validateToken();
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState<User>(defaultUser),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.entity = action.payload.user;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.entity = action.payload.user;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(validateToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(validateToken.fulfilled, (state, action) => {
      state.loading = false;
      state.entity = action.payload.user;
    });
    builder.addCase(validateToken.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
