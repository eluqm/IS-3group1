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
  Avatar,
  textDecoration,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

//import components
import Header from '../../components/Header';
import C4PCard from '../../components/C4PCard';

import CallForPapersLayout from '../../layouts/CallForPapersLayout';

const papers = [
  {
    id: 0,
    eventName: 'SIMBig 2022',
    tittle:
      ' 9th International Conference on Information Management and Big Data.',
    date: '10/04/22',
    date2: '10/05/24',
    url: 'example link',
    location: 'EEUU',
    mdName: 'archivo md',
  },
  {
    id: 1,
    eventName: 'SIMBig 2022',
    tittle:
      ' 9th sdfsInternational Conference on Information Management and Big Data.',
    date: '10/04/22',
    date2: '10/05/24',
    url: 'example link',
    location: 'EEsdfUU',
    mdName: 'archivo md',
  },
];

const _topics = [
  {
    _id: '1',
    name: 'Artificial Intelligence',
    cant: 2,
  },
  {
    _id: '2',
    name: 'Computer vision & patterns',
    cant: 3,
  },
];

const _locations = [
  {
    _id: '1',
    country: 'Perú',
    imageUrl: 'http//domain.com/image/',
  },
  {
    _id: '2',
    country: 'Brasil',
    imageUrl: 'http//domain.com/image/',
  },
];

const _callforpapers = [
  {
    _id: 1,
    title: 'IEEE BIG DATA SERVICE 2022',
    eventUrl:
      'https://www.call4paper.com/detail/event/FJHSPTEF31124032?v=subject',
    topics: ['Databases & Information Systems'],
    location: 'San Franciso, USA',
    filePath: '/api/v1/files/c4p002.md',
  },
  {
    _id: 2,
    title: 'IEEE BIG DATA SERVICE 2022',
    eventUrl:
      'https://www.call4paper.com/detail/event/FJHSPTEF31124032?v=subject',
    topics: ['Databases & Information Systems'],
    location: 'San Franciso, USA',
    filePath: '/api/v1/files/c4p002.md',
  },
];

import { useEffect, useState } from 'react';
import axios from 'axios';

function CallForPapers() {
  let [topics, setTopics] = useState(_topics);
  let [locations, setLocations] = useState(_locations);
  let [callforpapers, setCallForPapers] = useState(_callforpapers);

  useEffect(() => {
    const fetchCallForPapers = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/callforpapers`
      );
      setCallForPapers(response.data.callForPapers);
    };

    fetchCallForPapers();
  }, []);

  return (
    <CallForPapersLayout>
      <div>
        {/* For Top Navbar -> By */}
        <Container>
          <Center>
            <Tabs>
              <TabList>
                <Tab isDisabled>By subject</Tab>
                <Tab isDisabled>By country</Tab>
                <Tab isDisabled>By date</Tab>
              </TabList>
              {/* <TabPanels>
                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
                <TabPanel>3</TabPanel>
              </TabPanels> */}
            </Tabs>
          </Center>
        </Container>

        {/* For Content */}
        <Flex flexDirection="row" mx="10vw">
          {/* For left navbar */}
          <Box minW="25vw" boxShadow="2xl" rounded="lg" m="1rem" p="1rem">
            <Heading pb={3} pt={3}>
              Topics
            </Heading>

            {topics.map((topic) => (
              <Link href={'#'} key={topic._id}>
                <Flex>
                  <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {topic.name}
                  </Text>
                  <Text color={'blue.400'} ml="5px">{`(${topic.cant})`}</Text>
                </Flex>
              </Link>
            ))}

            <Heading pb={3} pt={3}>
              Locations
            </Heading>
            {locations.map((location) => (
              <Link href={'#'} key={location._id}>
                <Flex mb={2}>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text
                    fontWeight={600}
                    color={'gray.500'}
                    mb={4}
                    pt="12px"
                    ml="12px"
                  >
                    {location.country}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Box>

          {/* For Items */}
          <Box minW="45vw" m="1rem" p="1rem">
            {callforpapers.map((c4p) => (
              <Link
                pl="8"
                key={c4p._id}
                mb={4}
                _hover={{ textDecoration: 'none' }}
              >
                <C4PCard
                  c4pid={c4p._id}
                  eventName={c4p.title}
                  tittle={c4p.eventUrl}
                  date={`18-08-2022`}
                  mdName={c4p.filePath}
                />
              </Link>
            ))}
          </Box>
        </Flex>
      </div>
    </CallForPapersLayout>
  );
}
export default CallForPapers;
