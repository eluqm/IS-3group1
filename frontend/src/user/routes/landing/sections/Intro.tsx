import { Box, Heading, Text, Button, HStack, VStack } from '@chakra-ui/react';
import backImg from '../../../../img/backgr.jpg';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Intro = ({ ObjAnima }: { ObjAnima: Variants }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/callforpapers');
  };

  return (
    <Box
      bgImage={backImg}
      bgRepeat="no-repeat"
      bgSize="cover"
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
    >
      <VStack bg="rgb(0 0 255 / 65%)" textAlign="center" spacing="7" py="60">
        <Heading
          color="green.300"
          as="h1"
          letterSpacing="2.5px"
          fontSize="6xl"
          maxW="xl"
          borderColor="blackAlpha.900"
          fontStyle="italic"
        >
          _Call for papers
        </Heading>

        <Box maxW="lg" as={motion.div} variants={ObjAnima}>
          <Text color="whiteAlpha.800" fontSize="2xl">
            "WAQYA" es un canal de difusión de llamados a publicar (Call for
            papers), mediante el cual los usuarios podrán visualizar, comentar y
            agregar a favoritos los principales Call for papers (C4P) en
            seminarios, Conferencias, Workshops y Journals en los tópicos más
            relevantes del área de Ciencia de la Computación.
          </Text>
        </Box>

        <HStack as={motion.div} variants={ObjAnima} spacing="6">
          <Button
            size="lg"
            mt="20"
            colorScheme="green"
            borderColor="green.900"
            onClick={handleClick}
          >
            VER PAPERS
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Intro;
