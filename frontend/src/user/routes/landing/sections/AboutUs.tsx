import {
    Box, 
    Container,
    Flex,
    Spacer,
    Grid,
    GridItem,
    Input,
    Button,
    ButtonGroup,
    Text,
    Heading,
    VStack,
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react';
import AboutUsCard from '../../../components/AboutUsCard';
import { motion, Variants } from "framer-motion";

const description = [
    {
        id: 0,
        des: 'Waqya combina de forma única una base de datos de Call for papers vinculados en Ciencia de la computación, donde los artículos se evalúan con criterios que incluyen la excelencia, la novedad y la importancia de la investigación o las ideas.',
    },
    {
        id: 1,
        des: 'El campo de Ciencias de la computación ofrece varias disciplinas de investigación, donde podrán encontrar investigaciones sobre: Inteligencia Artificial, Ingeniería de software, Computación gráfica, entre otras.',
    },
    {
        id: 2,
        des: 'El equipo de Waya se esfuerza diariamente en brindar los call for papers más relevantes, con la finalidad que nuestros usuarios esten actualizados en el campo de Ciencia de la computación',
    },
    {
        id: 3,
        des: 'Waqya tiene la suerte de servir a las personas interesadas en el campo de Ciencia de la computación, mediante un canal de difusión que ofrece nuestra página web amigable para nuestros usuarios',
    }
]

const AboutUs = ({
    ObjAnima
}:{
    ObjAnima: Variants
}) => {
    return(
        <Box
            bg='linear-gradient(146deg, rgba(61,50,255,1) 20%, rgba(23,23,251,1) 60%, rgba(39,149,249,1) 95%)'
            as={motion.div}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true, amount:0.8}}
        >
            
            <VStack 
                textAlign='center' 
                spacing='10'  
                pt='20' pb='40'
            >

                <Heading
                    textTransform='uppercase'
                    color='green.400' 
                    mb='10' 
                    letterSpacing='2.5px'  
                    fontSize={{base:'3xl', md:'4xl', lg:'5xl'}} 
                    maxW='xl'
                > 
                    Sobre Nosotros
                </Heading>

                <SimpleGrid  
                    maxW='5xl' 
                    columns={{base:1,md:1,lg:2}} 
                    spacing={6}
                    color='black'
                    as={motion.div}
                    variants={ObjAnima}
                >
                    {
                        description.map(it => (
                            <Box key={it.id}>
                                <AboutUsCard 
                                    description={it.des} 
                                    intImage={it.id}
                                />
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </VStack>
        </Box>
    );
}

export default AboutUs;