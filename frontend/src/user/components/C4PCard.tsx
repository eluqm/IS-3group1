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

interface ImportantDates {
  description: string;
  date: string;
}

interface Props {
  c4pid: string;
  eventName: string;
  tittle: string;
  date: string;
  importantDates?: Array<ImportantDates>;
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
            <Text fontSize="md" fontWeight="bold" textAlign="center">
              Important dates
            </Text>
          </Box>
        </Flex>

        {/** For important dates */}
        <Flex justify="center" py={5}>
          {props.importantDates?.map((importantDate, index) => (
            <Box px={5} key={index}>
              <Flex direction="column" align="center">
                <Text color="#737070" fontSize="sm">
                  {importantDate.date}
                </Text>
                <Text color="#3b3b3b" fontSize="sm">
                  {importantDate.description}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

        <Flex wrap="wrap" gap={2}>
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
