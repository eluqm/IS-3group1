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
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { GiExitDoor } from 'react-icons/gi';
import { FiUser } from 'react-icons/fi';

import { Link as ReachLink, useNavigate } from 'react-router-dom';

import './Header.css';

import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['Token', 'User']);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cookies);
  }, []);

  const handleLogout = () => {
    removeCookie('Token');
    removeCookie('User');

    navigate('/callforpapers', { replace: true });
  };

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
        {cookies.Token ? (
          <>
            <GridItem p="1" pt="10px">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {cookies.User}
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px" onClick={handleLogout}>
                    <GiExitDoor />
                    <Text ml={2}> Cerrar sesión</Text>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <FiUser />
                    <Text ml={2}>Ver perfile</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </GridItem>
            <GridItem pt={1}>
              <Link
                as={ReachLink}
                to="/user/profile"
                _hover={{ textDecoration: 'none' }}
              >
                <Avatar
                  name={`${cookies.User}`}
                  src="https://bit.ly/broken-link"
                />
              </Link>
            </GridItem>
          </>
        ) : (
          <>
            <GridItem p="1" pt="15">
              <Link
                as={ReachLink}
                to="/login"
                _hover={{ textDecoration: 'none' }}
              >
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
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Header;
