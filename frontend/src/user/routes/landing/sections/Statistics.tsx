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
import { motion, Variants } from "framer-motion";


const Statistics = ({
    ObjAnima
}:{
    ObjAnima: Variants
}) => {
    return(
        <Box
            bg='linear-gradient(325deg, rgba(18,4,255,1) 20%, rgba(41,41,219,1) 57%, rgba(0,123,235,1) 95%)'
            as={motion.div}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true, amount:0.8}}
        >
            <VStack 
                color='green.400' 
                textAlign='center' 
                spacing='10'  
                pt='20' pb='60'
            >

                <Heading
                    textTransform='uppercase'
                    mb='10' 
                    letterSpacing='2.5px'  
                    fontSize={{base:'3xl', md:'4xl', lg:'5xl'}} 
                    maxW='xl'
                > 
                    Ofrecemos
                </Heading>
                
                <SimpleGrid
                    as={motion.header}
                    variants={ObjAnima} 
                    maxW='6xl'
                    columns={{base:1,md:2}} 
                    spacing={[8,10,40]}
                >
                    <Box>
                        <Container maxW='xl' mr='4'>
                            <Text fontSize='6xl' color='white'>
                                +100
                            </Text>
                            <Text fontSize='3xl' color='green.300'>
                                Journals
                            </Text>
                        </Container>
                    </Box>
                    <Box>
                        <Container maxW='xl' ml='2'>
                            <Text fontSize='6xl' color='white'>
                                +90
                            </Text>
                            <Text fontSize='3xl' color='green.300'>
                                Eventos
                            </Text>
                        </Container>
                    </Box>
                </SimpleGrid>
                <Box
                    as={motion.header}
                    variants={ObjAnima}
                >
                    <Container maxW='xl' ml='4'>
                        <Text fontSize='6xl' color='white'>
                            +5
                        </Text>
                        <Text fontSize='3xl' color='green.300'>
                            Paises
                        </Text>
                    </Container>
                </Box>
            </VStack>
        </Box>
    );
}

export default Statistics;