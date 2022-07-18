import {
  Box, 
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Image,
  Button,
  ButtonGroup,
  Text,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Checkbox,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react'
import LoginFrom from './section/LoginFrom';
import Footer from '../../components/Footer';

const Login = () => {
  return(
    <Box>
      <LoginFrom/>
      <Footer/>
    </Box>
  );
}

export default Login;