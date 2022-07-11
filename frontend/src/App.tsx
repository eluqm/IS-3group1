import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  HStack,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Spacer,
  Image,
  Flex
} from '@chakra-ui/react';

//import components
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" bg='#f5f5f5'>
      <Header/>
      <HStack  pl={200} py={100}>
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'left'}>

            <Heading fontSize={'2xl'} fontFamily={'body'} pt={3} pb={7}>
              Topic
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              Artificial Intelligence   <Link href={'#'} color={'blue.400'}> (2)</Link><Spacer />
              Computer vision & patterns  <Link href={'#'} color={'blue.400'}> (5)</Link><Spacer />
              Software systems  <Link href={'#'} color={'blue.400'}> (10)</Link><Spacer />
              Robotics  <Link href={'#'} color={'blue.400'}> (7)</Link><Spacer />
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} pt={3} pb={7}>
              Locations
            </Heading>

            <HStack>
              <Text
                textAlign={'left'}
                color={useColorModeValue('gray.700', 'gray.400')}>

                <Flex pb={5}>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
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
                  <Text pl={3}> Peru</Text>
                </Center><Spacer />
                </Flex>

                <Flex pb={5}>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
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
                </Center><Spacer />
                </Flex>

                <Flex pb={5}>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
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
                </Center><Spacer />
                </Flex>

                <Flex pb={5}>
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
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
                </Center><Spacer />
                </Flex>
                
            
              </Text>
              </HStack>
        

          </Box>
        </HStack>
    </Box>
  )
}

export default App
