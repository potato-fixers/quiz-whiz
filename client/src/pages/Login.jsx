import LoginForm from '../components/user-auth/Login-Form';
import { Box, Container } from '@mui/material';
import '../components/user-auth/styles/register.css';

export default function Login() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <LoginForm />
        </Box>
      </Container>
    </>
  )
}