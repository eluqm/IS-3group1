import {
  Heading,
  Box,
  Center,
  Text,
  HStack,
  VStack,
  Link,
  useColorModeValue,
  Spacer,
  Image,
  Flex,
  Stack,
  Container,
  Badge,
  Circle,
  Tab,
  Tabs,
  TabList,
  StackDivider,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';

interface Props {
  c4pid: number;
  eventName: string;
  tittle: string;
  date: string;
  mdName: string;
}

const C4PCard = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={2}
      height={240}
      borderWidth="1px"
      borderRadius="lg"
      w="100%"
      //height={{ sm: '400px', md: '20rem' }}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}
      onClick={() => navigate(`/callforpapers/${props.c4pid}`)}
    >
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        p={1}
        pt={2}
      >
        <Heading textAlign={'left'} fontSize={'2xl'} fontFamily={'body'} px={3}>
          {props.eventName}
          <Badge ml="2" colorScheme="green">
            New
          </Badge>
        </Heading>

        <Text
          textAlign={'left'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          {props.tittle}
        </Text>

        <Flex alignItems="center">
          <Circle size="30px" bg="#3483FA" color="white">
            <CalendarIcon />
          </Circle>
          <Box ml="3">
            <Text fontSize="sm" textAlign="center">
              {props.date}
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default C4PCard;
