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
  HStack,
  VStack,
  Avatar,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import prof from '../../img/profile.jpg';
import { motion } from 'framer-motion';

const CommCard = ({
  comment,
  date,
  mail,
}: {
  comment: string;
  date: string;
  mail: string;
}) => {
  return (
    <Box
      bg="linear-gradient(162deg, rgba(4,193,238,1) 38%, rgba(67,206,250,1) 57%)"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="black.500"
      boxShadow="lg"
      overflow="hidden"
      maxW="xl"
      px="2"
      m="2"
      as={motion.div}
      whileHover={{ scale: 1.05 }}
    >
      <Flex mx="2" mb="4" mt="2">
        <Avatar
          boxShadow="lg"
          size="md"
          name="profile"
          src={prof}
          mx="2"
          mt="2"
        />
        <Box mx="2">
          <Badge
            borderRadius="full"
            mt="4"
            mb="1"
            p="1"
            colorScheme="teal"
            textTransform="uppercase"
          >
            {mail}
          </Badge>

          <Box
            fontSize="xs"
            letterSpacing="wide"
            textTransform="uppercase"
            textAlign="initial"
            ml="2"
          >
            {date}
          </Box>
        </Box>
      </Flex>
      <Box
        textAlign="initial"
        px="2"
        pb="4"
        m="1"
        fontWeight="semibold"
        as="h4"
      >
        <Text>{comment}</Text>
      </Box>
    </Box>
  );
};

export default CommCard;
