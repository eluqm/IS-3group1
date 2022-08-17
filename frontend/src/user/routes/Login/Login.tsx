import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import LoginFrom from './section/LoginForm';

import LogSignLayout from '../../layouts/LogSignLayout';

import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [cookies, setCookies, removeCookies] = useCookies(['Token', 'User']);

  if (cookies.Token) return <Navigate to="/" replace />;

  return (
    <LogSignLayout>
      <Box>
        <LoginFrom />
      </Box>
    </LogSignLayout>
  );
};

export default Login;
