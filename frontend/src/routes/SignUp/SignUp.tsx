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
	IconButton,
	Image,
	VStack,
	Link,
	FormErrorMessage,
	FormHelperText,
} from '@chakra-ui/react';
import { MdFacebook } from 'react-icons/md';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form'


//import { Link } from 'react-router-dom';

//import components
// import Header from '../.././components/Header'

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm()

	function onSubmit(values) {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))
				resolve()
			}, 3000)
		})
	}

	return (
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

				<Flex p='2' flex='1' align='center' justify='center' >
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
							<Heading fontSize={'3xl'}>Registrate con</Heading>
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<HStack>
								<Box>
									<FormControl isInvalid={errors.name}>
										<FormLabel htmlFor='name'>Nombres</FormLabel>
										<Input
											type="text"
											id='name'
											placeholder='Nombre'
											{...register('name', {
												required: 'Esta informacion es requerida',
												minLength: { value: 4, message: 'Longitud minima 4' },
											})}
										/>
										<FormErrorMessage>
											{errors.name && errors.name.message}
										</FormErrorMessage>
									</FormControl>
								</Box>
								<Box>
									<FormControl isInvalid={errors.name} >
										<FormLabel htmlFor='lastname'>Apellidos</FormLabel>
										<Input
											type="text"
											placeholder="Apellidos"
											id='lastname'
											{...register('lastname', {
												required: 'Esta informacion es requerida',
												minLength: { value: 4, message: 'Longitud minima 4' },
											})}
										/>
										<FormErrorMessage>
											{errors.name && errors.name.message}
										</FormErrorMessage>
									</FormControl>
								</Box>
							</HStack>
							<FormControl id="email" isRequired>
								<FormLabel>Correo electrónico</FormLabel>
								<Input
									type="email"
									placeholder="Correo electrónico"
									{...register('email')}
								/>
							</FormControl>

							<FormControl id="password" isRequired>
								<FormLabel>Contraseña</FormLabel>
								<InputGroup>
									<Input type={showPassword ? 'text' : 'password'}
										{...register('password')} />
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
									mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'
									size="lg"
									bg={'blue.400'}
									color={'white'}
									_hover={{
										bg: 'blue.500',
									}}>
									Registro
								</Button>

							</Stack>
						</form>
						<Stack pt={6}>
							<Text align={'center'}>
								Ya tienes una cuenta ? <Link color={'blue.400'}>Login</Link>
							</Text>
						</Stack>
					</Box>
				</Flex>

			</Stack>
		</Flex>

	);
}



