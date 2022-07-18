import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    IconButton
} from '@chakra-ui/react';
import {MdFacebook} from 'react-icons/md';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
//import components
import Header from '../.././components/Header'
  
export default function SignupCard() {
const [showPassword, setShowPassword] = useState(false);
    return (
        <Box className="App" bg='#f5f5f5'>
        <Header/>
            <Flex
                minH={'5vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                        <Text fontWeight={1000} color={'gray.500'} >
                        Registrate con
                    </Text>
                        <Heading fontSize={'lg'} color={'gray.600'}>
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
                        </Heading>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} />
                            <InputRightElement h={'full'}>
                                <Button
                                variant={'ghost'}
                                onClick={() =>
                                    setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                            loadingText="Submitting"
                            size="lg"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                            Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Box> 
    );
}
