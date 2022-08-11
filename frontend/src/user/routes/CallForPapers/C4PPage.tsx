import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  IconButton,
  Image,
  VStack,
  Link,
  FormErrorMessage,
  FormHelperText,
  Container,
  SimpleGrid
} from '@chakra-ui/react';

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { BsGithub, BsLinkedin,BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { FaRegShareSquare } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';
import { TbLink,TbCalendarStats,TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import {MdFacebook} from 'react-icons/md';

import LogSignLayout from '../../layouts/LogSignLayout';

const papers = [
  {
    id: 0,
    eventName: 'SIMBig 2022',
    tittle: ' 9th International Conference on Information Management and Big Data.',
    date: '10/04/22',
    date2:'10/05/24',
    url:'example link',
    location:'EEUU',
    mdName: 'archivo md'  
  },
  {
    id: 1,
    eventName: 'SIMBig 2022',
    tittle: ' 9th sdfsInternational Conference on Information Management and Big Data.',
    date: '10/04/22',
    date2:'10/05/24',
    url:'example link',
    location:'EEsdfUU',
    mdName: 'archivo md'  
  },
];

const C4PPage = () => {
  const params = useParams();
  const idnum = Number(params.id);
  return(
    <LogSignLayout>
      <Box>
        <Container maxW='container.lg' py='40'>
          <SimpleGrid columns={1} spacing={4}>
            <Box bg='green.300' rounded='full'>
              <Text mx='4' my='2'>
                {papers[idnum].tittle}
              </Text>
            </Box>

            <Box bg='tomato' rounded='xl' background='gray.200'>
              <Box  mx='4' my='2'>
                <Flex alignItems='center' mb='2'>
                  <TbLink size="28px"/>
                  <Text mx='2'>
                    {papers[idnum].url}
                  </Text>
                </Flex>
                <Flex alignItems='center'  mb='2'>
                  <TbCalendarStats size="28px"/>
                  <Text mx='2'>
                    {papers[idnum].date}
                  </Text>
                </Flex>
                <Flex alignItems='center'  mb='2'>
                  <TbCalendarTime size="28px"/>
                  <Text mx='2'>
                    {papers[idnum].date2}
                  </Text>
                </Flex>
                <Flex alignItems='center'  mb='2'>
                  <IoLocationOutline size="28px"/>
                  <Text mx='2'>
                    {papers[idnum].location}
                  </Text>
                </Flex>

                <Flex  mx='4' alignItems='center'>
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<FaRegShareSquare size="35px" />}
                    />
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<MdFacebook size="35px" />}
                    />
                  <IconButton
                    aria-label="gmail"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsGoogle size="28px" />}
                  />
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsLinkedin size="28px" />}
                  />
                </Flex>
              </Box>
              <Box  mx='6' my='4'>
                <Text>
                  {papers[idnum].mdName}
                </Text>
                {/*<MarkDown>
                  </MarkDown>*/}
              </Box>
            </Box>
          </SimpleGrid>
      </Container>
      </Box>
    </LogSignLayout>
  );
};
export default C4PPage;