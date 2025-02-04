'use client';

import { TextField, Button, Box, Alert } from '@mui/material';
import { useState, FormEvent } from 'react';

import { useRouter } from 'next/navigation';

import { useRegisterMutation } from '@/api/auth/auth.api';
import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import clientCookies from '@/lib/cookies';

const { TOKEN } = LOCAL_STORAGE_KEYS;

export default function RegisterForm() {
  const router = useRouter();

  const [register] = useRegisterMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    register({ email, password })
      .unwrap()
      .then((response) => {
        if (response.token) {
          clientCookies.set(TOKEN, response.token);
          router.push('/dashboard');
        }
      })
      .catch(console.error);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
    </Box>
  );
}
