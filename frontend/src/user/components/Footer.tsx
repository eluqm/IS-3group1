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
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box>
      <Container maxW="6x1" centerContent boxShadow={'md'} bg="gray.50">
        <Text> © 2022 Pocho's com. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;
