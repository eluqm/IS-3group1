import {
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
} from '@chakra-ui/react';
import Layout from '../../layouts/Layout';

import { MdEmail } from 'react-icons/md';
import { FaUniversity,FaSave } from 'react-icons/fa';

const Profile = () => {
  return (
    <Layout>
      <Flex justify="center">
        <VStack
          spacing={3}
          p={5}
          m={5}
          maxW="300px"
          rounded="lg"
          boxShadow="2xl"
          border="solid 2px rgba(233, 233, 233, 0.58)"
        >
          <Image
            w="15rem"
            src="https://bit.ly/dan-abramov"
            alt="Username"
            rounded="full"
            border="solid 5px rgba(144, 39, 245, 0.55)"
          />

          <Flex direction="column" align="center">
            <Text fontSize="xl" fontWeight="bold">
              Joel Perca
            </Text>
            <Text fontSize="md" fontWeight="bold" color="gray.400">
              @jperca
            </Text>
          </Flex>

          <Flex alignItems="center" w="100%">
            <Text color="gray.700" fontWeight="semibold">
              jperca@unsa.edu.pe
            </Text>
            <Spacer />
            <MdEmail size="1.5em" />
          </Flex>
          <Flex alignItems="center" w="100%">
            <Text color="gray.700" fontWeight="semibold">
              Universidad Nacional de San Agustín de Arequipa
            </Text>
            <Spacer />
            <FaUniversity size="1.5em" />
          </Flex>
        </VStack>

        <Box minW="50vw" p={5} m={5} rounded="lg" boxShadow="2xl">
          <Heading fontSize="2xl">Editar perfil</Heading>
          <form>
            <HStack pt={5}>
              <FormControl>
                <FormLabel>Nombres</FormLabel>
                <Input type="text" defaultValue='Joel Cristian' />
              </FormControl>
              <FormControl>
                <FormLabel>Apellidos</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <FormControl mt={3}>
              <FormLabel>Correo</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Universidad</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Ocupación</FormLabel>
              <Input type="text" />
            </FormControl>
            <Button
              mt={4}
              leftIcon={<FaSave/>}
              colorScheme='green'
            >
              Guardar
            </Button>
          </form>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Profile;