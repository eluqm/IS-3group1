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


//import components
import Header from '../../components/Header';
import C4PCard from '../../components/C4PCard';

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

import { useEffect } from 'react';

function CallForPapers() {
  useEffect(() => {
    console.log(import.meta.env);
  });
  return (
    <Box className="App">
      <Header />
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

      <Grid
        templateAreas={`"header header"
            "nav main"
            "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'650px 1fr'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="280" area={'nav'}>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'left'}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'} pt={3} pb={6}>
              Topic
            </Heading>

            <Text fontWeight={600} color={'gray.500'} mb={4}>
              Artificial Intelligence{' '}
              <Link href={'#'} color={'blue.400'}>
                {' '}
                (2)
              </Link>
              <Spacer />
              Computer vision & patterns{' '}
              <Link href={'#'} color={'blue.400'}>
                {' '}
                (5)
              </Link>
              <Spacer />
              Software systems{' '}
              <Link href={'#'} color={'blue.400'}>
                {' '}
                (10)
              </Link>
              <Spacer />
              Robotics{' '}
              <Link href={'#'} color={'blue.400'}>
                {' '}
                (7)
              </Link>
              <Spacer />
            </Text>

            <Heading fontSize={'2xl'} fontFamily={'body'} pt={3} pb={7}>
              Locations
            </Heading>

            <HStack>
              <Text
                textAlign={'left'}
                color={useColorModeValue('gray.700', 'gray.400')}
              >
                <Flex pb={5}>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="https://bit.ly/dan-abramov"
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                  />
                  <Center>
                    <Text pl={3}>Peru</Text>
                  </Center>
                  <Spacer />
                </Flex>

                <Flex pb={5}>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="https://bit.ly/dan-abramov"
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                  />
                  <Center>
                    <Text pl={3}> Brazil </Text>
                  </Center>
                  <Spacer />
                </Flex>

                <Flex pb={5}>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="https://bit.ly/dan-abramov"
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                  />
                  <Center>
                    <Text pl={3}> Venezuela</Text>
                  </Center>
                  <Spacer />
                </Flex>

                <Flex pb={5}>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src="https://bit.ly/dan-abramov"
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                  />
                  <Center>
                    <Text pl={3}> EEUU</Text>
                  </Center>
                  <Spacer />
                </Flex>
              </Text>
            </HStack>
          </Box>
        </GridItem>

        <GridItem pl="2" area={'main'}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={1}
            align="stretch"
          >
            {papers.map((it) => (
              <Box pl="8" key={it.id}>
                <C4PCard
                  c4pid={it.id}
                  eventName={it.eventName}
                  tittle={it.tittle}
                  date={it.date}
                  mdName={it.mdName}
                />
              </Box>
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default CallForPapers;
