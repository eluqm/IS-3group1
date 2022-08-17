import { Box } from '@chakra-ui/react';

import LogSignLayout from '../../layouts/LogSignLayout';
import SignUpForm from './section/SignUpForm';

export default function Signup() {
  return (
    <LogSignLayout>
      <SignUpForm />
    </LogSignLayout>
  );
}
