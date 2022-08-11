import {
  Box
} from '@chakra-ui/react';
import LoginFrom from './section/LoginFrom';

import LogSignLayout from '../../layouts/LogSignLayout';

const Login = () => {
  return (
    <LogSignLayout>
      <Box>
        <LoginFrom />
      </Box>
    </LogSignLayout>
  );
};

export default Login;
