import {
  Heading,
  Box,
  Center,
  Text,
  Link,
  Flex,
  Container,
  Tab,
  Tabs,
  TabList,
  Avatar,
} from '@chakra-ui/react';

//import components
import C4PCard from '../../components/C4PCard';
import CallForPapersLayout from '../../layouts/CallForPapersLayout';

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

interface ICallForPaper {
  _id: string;
  title: string;
  eventName: string;
  eventUrl: string;
  topics: [string];
  location: string;
  filePath: string;
  submisionDate?: Date;
}

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SearchCallForPapers() {
  let [topics, setTopics] = useState(_topics);
  let [locations, setLocations] = useState(_locations);
  let [callforpapers, setCallForPapers] = useState<[ICallForPaper]>([]);
  let searchQuery = useParams();

  useEffect(() => {
    const fetchCallForPapers = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search?search=${searchQuery.search}`
      );
      setCallForPapers(response.data);
    };

    fetchCallForPapers();
  }, [callforpapers]);

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
                  eventName={c4p.eventName}
                  tittle={c4p.title}
                  date={`18-08-2022`}
                  topics={c4p.topics}
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
export default SearchCallForPapers;
