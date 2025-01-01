import RegisterForm from "@/components/RegisterForm";
import { Container, Typography, Box } from "@mui/material";

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
  );
}
