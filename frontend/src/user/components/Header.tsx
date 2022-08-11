import {
  Link,
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Input,
  Button,
  Image,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { Link as ReachLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <Container maxW="full" centerContent boxShadow={'md'} bg="white">
      <Grid templateColumns="repeat(12, 1fr)" color={'black'}>
        <GridItem p="2">
          <Image
            objectFit="cover"
            boxSize="100%"
            w="7"
            src={'/src/img/imagotipo.png'}
          />
        </GridItem>
        <GridItem p="2">
          <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
            <p className="title-waqya">Waqya</p>
          </Link>
        </GridItem>
        <GridItem colSpan={7} p="2">
          <Input
            placeholder="Buscar..."
            color={'#9c98e7'}
            borderRadius="full  "
          />
        </GridItem>
        <GridItem pl="0.1" pt="2">
          <Button colorScheme="blue">
            <SearchIcon />
          </Button>
        </GridItem>
        <GridItem p="1" pt="15">
          <Link as={ReachLink} to="/login" _hover={{ textDecoration: 'none' }}>
            Ingresar
          </Link>
        </GridItem>
        <GridItem p="2" pt="15">
          <Link
            as={ReachLink}
            to="/register"
            _hover={{ textDecoration: 'none' }}
          >
            Registrar
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Header;
