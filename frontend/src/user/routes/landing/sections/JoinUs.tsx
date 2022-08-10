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
    Heading,
    Text,
    VStack,
    HStack,
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react';
import { motion, Variants } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const JoinUs = ({
    ObjAnima
}:{
    ObjAnima: Variants
}) => {
    
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/signup');
    };

    return(
        <Box 
            bg='linear-gradient(148deg, rgba(47,36,251,1) 0%, rgba(48,48,250,1) 46%, rgba(8,137,252,1) 100%)'
            as={motion.div}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true, amount:0.8}}
        >
            
            <VStack 
                color='green.400' 
                textAlign='center' 
                spacing='10'  
                pt='20' pb='40'
                justifyContent='center'
            >
                <Heading
                    textTransform='uppercase' 
                    mb='10' 
                    letterSpacing='2.5px' 
                    as='h1' 
                    fontSize={{base:'3xl', md:'4xl', lg:'5xl'}} 
                    maxW='xl' 
                    pb='10'
                > 
                    Únete a nuestra comunidad
                </Heading>
                
                <SimpleGrid
                    maxW='5xl' 
                    columns={{base:1,md:2}} 
                    spacing={6}
                    py='10'
                    as={motion.div}
                    variants={ObjAnima}
                >
                    <Box mx='5'>
                        <Heading 
                            mb='5' 
                            letterSpacing='1.5px' 
                            as='h2' 
                            fontSize='3xl' 
                        >
                            Recibe news letter
                        </Heading>
                        <Text color='gray.200'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quibusdam dolor vitae hic facere placeat modi quis ea eius expedita maiores, dolorem minus neque, ipsa velit laudantium facilis nemo voluptatem!
                        </Text>
                        <Box mt='20'>
                            <Button colorScheme='red' size='md'>
                                Suscribete
                            </Button>
                        </Box>
                    </Box>
                    
                    <Box mx='5'>
                        <Heading mb='5' 
                            letterSpacing='1.5px' 
                            as='h2' 
                            fontSize='3xl'
                        >
                            Crea tu cuenta
                        </Heading>
                        <Text color='gray.200'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit optio, magni perspiciatis provident accusantium cumque tempora in id quae, recusandae ducimus minima doloremque, similique animi placeat voluptatibus consequuntur exercitationem earum.
                        </Text>
                        <Box mt='20'>
                            <Button 
                                colorScheme='teal' 
                                size='md'
                                onClick={handleClick}
                            >
                                Crear Sesión
                            </Button>
                        </Box>
                    </Box>
                </SimpleGrid>

            </VStack>
        </Box>
    );
}

export default JoinUs;