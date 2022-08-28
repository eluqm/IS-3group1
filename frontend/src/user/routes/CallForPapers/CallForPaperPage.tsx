import {
  Flex,
  Box,
  Heading,
  IconButton,
  Link,
  Text,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { BsGithub, BsLinkedin, BsGoogle } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { TbLink, TbCalendarStats, TbCalendarTime } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';
import { MdFacebook } from 'react-icons/md';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import axios from 'axios';

import LogSignLayout from '../../layouts/LogSignLayout';
import Comments from './section/Comments';

interface ImportantDates {
  description: string;
  date: string;
}

interface ICall4Paper {
  _id: string;
  title: string;
  eventUrl: string;
  topics: Array<string>;
  importantDates: Array<ImportantDates>;
  location: string;
  filePath: string;
}

import './CallForPaperPage.css';

const C4PPage = () => {
  const params = useParams();

  let [contenido, setContenido] = useState('');
  let [call4paper, setCall4paper] = useState<ICall4Paper>({
    _id: '',
    title: '',
    eventUrl: '',
    topics: [],
    importantDates: [],
    location: '',
    filePath: '',
  });

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
        <Container maxW="container.lg" py="39px">
          <SimpleGrid columns={1} spacing={4}>
            <Box bg="green.300" rounded="full">
              <Heading size="lg" mx="4" my="2" p={2}>
                {call4paper.title}
              </Heading>
            </Box>

            <Box rounded="xl" shadow="xl">
              <Box mx="4" my="2">
                <Box pl={4} pt={4}>
                  {call4paper.importantDates.map((importantDate, index) => (
                    <Flex key={index} alignItems="center" mb="2">
                      <TbCalendarStats size="28px" />
                      <Text mx="2" fontWeight='bold'>{importantDate.description}</Text>
                      <Text>{importantDate.date}</Text>
                    </Flex>
                  ))}
                  <Flex alignItems="center" mb="2">
                    <IoLocationOutline size="28px" />
                    <Text mx="2">{call4paper.location}</Text>
                  </Flex>
                  <Flex alignItems="center" mb="2">
                    <TbLink size="28px" />
                    <Link
                      href={call4paper.eventUrl}
                      mx="2"
                      isExternal
                      fontWeight={600}
                    >
                      URL DEL EVENTO
                    </Link>
                  </Flex>
                </Box>

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
              <Box mx={10} my={5}>
                <div className="initial">
                  <ReactMarkdown
                    children={contenido}
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
              </Box>
            </Box>
          </SimpleGrid>
          <Flex>
            <Comments c4pId={call4paper._id} />
          </Flex>
        </Container>
      </Box>
    </LogSignLayout>
  );
};
export default C4PPage;
