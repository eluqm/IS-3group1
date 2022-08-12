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
  SimpleGrid,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { BsGithub, BsLinkedin, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { FaRegShareSquare } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { TbLink, TbCalendarStats, TbCalendarTime } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';
import { MdFacebook } from 'react-icons/md';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import LogSignLayout from '../../layouts/LogSignLayout';

interface ICall4Paper {
  _id: String;
  title: String;
  eventUrl: String;
  topics: Array<String>;
  location: String;
  filePath: String;
}

const _call4paper = {
  _id: '1',
  title: 'IEEE BIG DATA SERVICE 2022',
  eventUrl:
    'https://www.call4paper.com/detail/event/FJHSPTEF31124032?v=subject',
  topics: ['Databases & Information Systems'],
  location: 'San Franciso, USA',
  filePath: '/api/v1/files/c4p002.md',
};

const C4PPage = () => {
  const params = useParams();

  let [contenido, setContenido] = useState('');
  let [call4paper, setCall4paper] = useState<ICall4Paper>(_call4paper);

  useEffect(() => {
    const fetchData = async () => {
      // C4P data
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/callforpapers/${params.id}`
      );
      setCall4paper((call4paper = response.data.callForPaper));

      // Content data
      let contentResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/files/${call4paper.filePath}`
      );
      setContenido((contenido = contentResponse.data));
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <LogSignLayout>
      <Box>
        <Container maxW="container.lg" py="39">
          <SimpleGrid columns={1} spacing={4}>
            <Box bg="green.300" rounded="full">
              <Text mx="4" my="2">
                {call4paper.title}
              </Text>
            </Box>

            <Box bg="tomato" rounded="xl" background="gray.200">
              <Box mx="4" my="2">
                <Flex alignItems="center" mb="2">
                  <TbLink size="28px" />
                  <Text mx="2">{call4paper.eventUrl}</Text>
                </Flex>
                <Flex alignItems="center" mb="2">
                  <TbCalendarStats size="28px" />
                  <Text mx="2">{'12-08-2022'}</Text>
                </Flex>
                <Flex alignItems="center" mb="2">
                  <TbCalendarTime size="28px" />
                  <Text mx="2">{'12-08-2022'}</Text>
                </Flex>
                <Flex alignItems="center" mb="2">
                  <IoLocationOutline size="28px" />
                  <Text mx="2">{call4paper.location}</Text>
                </Flex>

                <Flex mx="4" alignItems="center">
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
              <Box mx="6" my="4">
                <Text>{call4paper.filePath}</Text>
                <ReactMarkdown children={contenido} />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </LogSignLayout>
  );
};
export default C4PPage;
