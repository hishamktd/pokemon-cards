import { Container, Typography, Box } from '@mui/material';

import LoginForm from '@/components/LoginForm';

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
}
