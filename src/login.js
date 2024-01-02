import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/products');
  };

  return (
    <Container
      maxWidth
      align="center"
      style={{
        background: 'linear-gradient(90deg, #fafafa 50%, #fff 50%)',
        height: '100vh',
      }}
    >
      <Box textAlign="center" style={{ width: '20rem' }}>
        <Box pt={2}>
          <Divider />
        </Box>
        <Box pl={2} pr={2} pt={22}>
          <TextField fullWidth label="Email" variant="outlined" />
        </Box>
        <Box p={2}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
        </Box>
        <Box textAlign="center" p={2}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
