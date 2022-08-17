import {
  Heading,
  Box,
  Text,
  useColorModeValue,
  Flex,
  Stack,
  Badge,
  Circle,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';

interface Props {
  c4pid: string;
  eventName: string;
  tittle: string;
  date: string;
  topics?: [string];
  mdName: string;
}

const C4PCard = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={2}
      borderWidth="1px"
      borderRadius="lg"
      w="100%"
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
        py={2}
        px={3}
      >
        <Heading textAlign={'left'} fontSize={'2xl'} fontFamily={'body'}>
          {props.eventName}
          <Badge ml="2" colorScheme="green">
            New
          </Badge>
        </Heading>

        <Text
          textAlign={'left'}
          color={useColorModeValue('gray.700', 'gray.400')}
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
        <Flex>
          {props.topics?.map((topic, index) => (
            <Badge key={index} rounded="full" colorScheme="purple" mr={1}>
              {topic}
            </Badge>
          ))}
        </Flex>
      </Stack>
    </Stack>
  );
};

export default C4PCard;
