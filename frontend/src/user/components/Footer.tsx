import {
  Box,
  Container,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Input,
  Button,
  ButtonGroup,
  Text,
  Link,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';

const Footer = () => {
  const iconSize = '2.5em';

  return (
    <Flex
      bg="#051120"
      color="white"
      flexDirection={'column'}
      alignItems="center"
      pb="2.5rem"
    >
      {/* Icon Group */}
      <Flex py={'2.5rem'}>
        <Box mx="7px">
          <Link>
            <AiFillFacebook size={iconSize} />
          </Link>
        </Box>
        <Box mx="7px">
          <Link>
            <AiFillInstagram size={iconSize} />
          </Link>
        </Box>
        <Box mx="7px">
          <Link>
            <AiFillTwitterCircle size={iconSize} />
          </Link>
        </Box>
      </Flex>

      <Flex>Info · Support · Marketing</Flex>
      <Flex>Terms of use · Privacy policy</Flex>
      <Flex color="whiteAlpha.400"> @2022 Pochos Inc </Flex>
      <Flex>
        <Link as={ReachLink} to="/callforpapers">
          C4Ps
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
