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

function CallForPapers() {
  return (
    <Box className="App" bg="#f5f5f5">
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
            <Box pl={8}>
              <Stack
                spacing={2}
                height={240}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '600px' }}
                //height={{ sm: '400px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
              >
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  p={1}
                  pt={2}
                >
                  <Heading
                    textAlign={'left'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    px={3}
                  >
                    SIMBig 2022
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Heading>

                  <Text
                    textAlign={'left'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                  >
                    9th International Conference on Information Management and
                    Big Data.
                  </Text>

                  <Flex>
                    <Circle size="30px" bg="#3483FA" color="white">
                      <CalendarIcon />
                    </Circle>
                    <Box ml="3">
                      <Text fontSize="sm" textAlign="center">
                        Fecha
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Stack>
            </Box>

            <Box pl={8}>
              <Stack
                spacing={2}
                height={240}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '600px' }}
                //height={{ sm: '400px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
              >
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  p={1}
                  pt={2}
                >
                  <Heading
                    textAlign={'left'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    px={3}
                  >
                    SIMBig 2022
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Heading>

                  <Text
                    textAlign={'left'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                  >
                    9th International Conference on Information Management and
                    Big Data.
                  </Text>

                  <Flex>
                    <Circle size="30px" bg="#3483FA" color="white">
                      <CalendarIcon />
                    </Circle>
                    <Box ml="3">
                      <Text fontSize="sm" textAlign="center">
                        Fecha
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Stack>
            </Box>

            <Box pl={8}>
              <Stack
                spacing={2}
                height={240}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '600px' }}
                //height={{ sm: '400px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
              >
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  p={1}
                  pt={2}
                >
                  <Heading
                    textAlign={'left'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    px={3}
                  >
                    SIMBig 2022
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Heading>

                  <Text
                    textAlign={'left'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                  >
                    9th International Conference on Information Management and
                    Big Data.
                  </Text>

                  <Flex>
                    <Circle size="30px" bg="#3483FA" color="white">
                      <CalendarIcon />
                    </Circle>
                    <Box ml="3">
                      <Text fontSize="sm" textAlign="center">
                        Fecha
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Stack>
            </Box>

            <Box pl={8}>
              <Stack
                spacing={2}
                height={240}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '600px' }}
                //height={{ sm: '400px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
              >
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  p={1}
                  pt={2}
                >
                  <Heading
                    textAlign={'left'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    px={3}
                  >
                    SIMBig 2022
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Heading>

                  <Text
                    textAlign={'left'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                  >
                    9th International Conference on Information Management and
                    Big Data.
                  </Text>

                  <Flex>
                    <Circle size="30px" bg="#3483FA" color="white">
                      <CalendarIcon />
                    </Circle>
                    <Box ml="3">
                      <Text fontSize="sm" textAlign="center">
                        Fecha
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Stack>
            </Box>

            <Box pl={8}>
              <Stack
                spacing={2}
                height={240}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '600px' }}
                //height={{ sm: '400px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
              >
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  p={1}
                  pt={2}
                >
                  <Heading
                    textAlign={'left'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    px={3}
                  >
                    SIMBig 2022
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Heading>

                  <Text
                    textAlign={'left'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                  >
                    9th International Conference on Information Management and
                    Big Data.
                  </Text>

                  <Flex>
                    <Circle size="30px" bg="#3483FA" color="white">
                      <CalendarIcon />
                    </Circle>
                    <Box ml="3">
                      <Text fontSize="sm" textAlign="center">
                        Fecha
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Stack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
export default CallForPapers;
