import RegisterForm from '../components/user-auth/Register-Form';
import { Box, Container } from '@mui/material';
import '../components/user-auth/styles/register.css';

export default function Register() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <RegisterForm />
        </Box>
      </Container>
    </>
  )
}