import {
  Link,
  Flex,
  Box,
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
  Heading,
} from '@chakra-ui/react';

// Icons
import { GiExitDoor } from 'react-icons/gi';
import { FiUser, FiLogIn } from 'react-icons/fi';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Link as ReachLink, useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const [cookies, setCookie, removeCookie] = useCookies(['Token', 'User']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('Token', { path: '/' });
    removeCookie('User', { path: '/' });

    navigate('/callforpapers', { replace: true });
  };

  const handleSearchChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchValue !== '') {
      navigate(`/search/${searchValue}`);
    }
  };

  return (
    <Flex
      align="center"
      justifyContent="center"
      py={2}
      boxShadow={'xl'}
      gap={'5'}
    >
      <Box>
        <Link as={ReachLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" gap={3}>
            <Image src={'/src/img/imagotipo.png'} h={'40px'} />
            <Heading color="rgb(52, 131, 250)">Waqya</Heading>
          </Flex>
        </Link>
      </Box>
      <Box>
        <Flex>
          <Input
            placeholder="Buscar Call For Papers ..."
            color="#9c98e7"
            borderLeftRadius="full"
            minW="30vw"
            onChange={handleSearchChange}
          />
          <Button leftIcon={<FaFilter />} borderRadius="0" colorScheme="teal" />
          <Button
            leftIcon={<FaSearch />}
            borderRightRadius="full"
            colorScheme="blue"
            onClick={handleSearchSubmit}
          >
            Buscar
          </Button>
        </Flex>
      </Box>
      {cookies.Token ? (
        <Flex align="center" gap={3}>
          <Link
            as={ReachLink}
            to="/user/profile"
            _hover={{ textDecoration: 'none' }}
          >
            <Text fontWeight="600" color="gray.500">
              {cookies.User || 'Joel Perca'}
            </Text>
          </Link>
          <Box>
            <Menu>
              <MenuButton>
                <Avatar
                  name={`${cookies.User || 'Joel Perca'}`}
                  /* src="https://bit.ly/broken-link" */
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>
                  <GiExitDoor />
                  <Text ml={2}> Cerrar sesión</Text>
                </MenuItem>
                <MenuItem>
                  <Link
                    as={ReachLink}
                    to="/user/profile"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Flex align="center">
                      <FiUser />
                      <Text ml={2}> Ver perfile</Text>
                    </Flex>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      ) : (
        <Flex gap={3}>
          <Link
            as={ReachLink}
            to="/login"
            _hover={{ textDecoration: 'none', textColor: 'blue.500' }}
          >
            <Flex align="center" gap={1}>
              <FiLogIn />
              <Text
                fontWeight="600"
                color="gray.500"
                _hover={{ textColor: 'blue.500' }}
              >
                Ingresar
              </Text>
            </Flex>
          </Link>
          <Link
            as={ReachLink}
            to="/register"
            _hover={{ textDecoration: 'none', textColor: 'blue.500' }}
          >
            <Flex align="center" gap={1}>
              <AiOutlineUserAdd />
              <Text
                fontWeight="600"
                color="gray.500"
                _hover={{ textColor: 'blue.500' }}
              >
                Registrar
              </Text>
            </Flex>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
