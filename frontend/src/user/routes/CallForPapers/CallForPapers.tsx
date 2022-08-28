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

interface ILocation {
  location: string;
  count: number;
  country?: string;
}

interface ITopic {
  topic: string;
  count: number;
}

interface ImportantDates {
  description: string;
  date: string;
}

interface ICallForPaper {
  _id: string;
  title: string;
  eventName: string;
  eventUrl: string;
  topics: [string];
  location: string;
  filePath: string;
  importantDates?: Array<ImportantDates>;
}

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function CallForPapers() {
  let [topics, setTopics] = useState<Array<ITopic>>([]);
  let [locations, setLocations] = useState<Array<ILocation>>([]);
  let [callforpapers, setCallForPapers] = useState<Array<ICallForPaper>>([]);
  let searchQuery = useParams();

  // for search
  const [searchValue, setSearchValue] = useState<string>('');
  /* 
  useEffect(() => {
    console.log(searchValue);
  }); */

  // fetch for locations
  useEffect(() => {
    const fetchLocations = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search/locations`
      );
      setLocations(response.data);
    };
    fetchLocations().catch(console.error);
  }, []);

  // fetch for topics
  useEffect(() => {
    const fetchTopics = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search/topics`
      );
      setTopics(response.data);
    };
    fetchTopics().catch(console.error);
  }, []);

  // fetch for callforpapers
  useEffect(() => {
    const fetchCallForPapers = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/callforpapers`
      );
      setCallForPapers(response.data.callForPapers);
    };

    const fetchSearchCallForPapers = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search?search=${searchValue}`
      );
      setCallForPapers(response.data);
    };

    if (!searchValue) {
      fetchCallForPapers();
    } else {
      fetchSearchCallForPapers();
    }
  }, [searchValue]);

  return (
    <>
      <Header searchQuery={searchValue} setSearchQuery={setSearchValue} />
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
        <Flex mx="10vw">
          {/* For left navbar */}
          <Flex
            direction="column"
            minW="25vw"
            boxShadow="2xl"
            rounded="lg"
            m={5}
            p={5}
            h="100%"
          >
            <Heading pb={3} pt={3}>
              Topics
            </Heading>

            {topics.map((topic, index) => (
              <Link href={'#'} key={index} _hover={{ textDecoration: 'none' }}>
                <Flex>
                  <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {topic.topic}
                  </Text>
                  <Text color={'blue.400'} ml="5px">{`(${topic.count})`}</Text>
                </Flex>
              </Link>
            ))}

            <Heading pb={3} pt={3}>
              Locations
            </Heading>
            {locations.map((location, index) => (
              <Link href={'#'} key={index} _hover={{ textDecoration: 'none' }}>
                <Flex mb={2}>
                  <Avatar
                    name={location.location}
                    src={`https://countryflagsapi.com/png/${location.country}`}
                  />
                  <Text
                    fontWeight={600}
                    color={'gray.500'}
                    mb={4}
                    pt="12px"
                    ml="12px"
                  >
                    {location.location}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>

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
                  importantDates={c4p.importantDates}
                  topics={c4p.topics}
                  mdName={c4p.filePath}
                />
              </Link>
            ))}
          </Box>
        </Flex>
      </div>
      <Footer />
    </>
  );
}
export default CallForPapers;
