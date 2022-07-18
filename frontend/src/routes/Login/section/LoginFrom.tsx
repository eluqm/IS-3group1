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
import {MdFacebook} from 'react-icons/md';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const LoginFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  return(
    <Flex
      minH='100vh'
      align='center'
      justify='center'
      bg='#f5f5f5'
    >
      <Stack 
        direction={{ base: 'column', md: 'row' }} 
        m='2'
      >
        <Box maxW='xl' m='1' pt='2'>
          <Image
            boxSize='full'
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Box>
        <Flex p='2' flex='1' align='center' justify='center'>
          <Box
            rounded='lg'
            bg={useColorModeValue('gray.50', 'gray.800')}
            boxShadow='lg'
            p='8'
          >
            <VStack 
              spacing='1' 
              align={['flex-start', 'center']} 
              w='md' 
              mb='10'
            >
              <Heading fontSize={'3xl'}>Ingresa con</Heading>
              <Box my='2' pt='6'>
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<MdFacebook size="28px" />}
                  />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsGithub size="28px" />}
                />
                <IconButton
                  aria-label="gmail"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<FcGoogle size="28px" />}
                />
              </Box>
            </VStack>
            <Stack spacing='4'>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h='full'>
                    <Button
                      variant='ghost'
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <HStack w='full' justify='space-between' pb='8'>
                <Checkbox>Remember me.</Checkbox>
              </HStack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Log in
                </Button>
              </Stack>
              <Stack pt={2} align={'center'}>
                
                <Flex>
                  <Text mr='2'>
                    ¿Nuevo en waqya?
                  </Text>
                  <Text color='blue.400'>
                    <Link to='/signup'>Create una cuenta</Link>
                </Text>
                </Flex>

                <Text color='blue.400'>
                  <Link to='/' >¿Olvidaste tu contraseña?</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>    
        </Flex>
      </Stack>
    </Flex>
  );
}

export default LoginFrom;