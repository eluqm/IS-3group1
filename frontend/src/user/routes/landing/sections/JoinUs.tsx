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
    SimpleGrid,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter
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
        navigate('/register');
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


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
                            Entérese de los últimos Call for papers (C4P) en seminarios, Conferencias, Workshops y Journals relacionados en Ciencias de la computación del día. El equipo de Waqya te informará en nuestro boletín de Call For Papers.
                        </Text>
                        <Box mt='20'>
                            <Button colorScheme='red' size='md' onClick={onOpen}>
                                Suscribete
                            </Button>
                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader>Más de 100 C4P se encuentran en nuestro canal de difusión</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                    <FormLabel>Suscríbase a nuestro boletín de call for papers de Waqya</FormLabel>
                                    <Flex mx='1'>
                                        <Input 
                                            ref={initialRef} 
                                            placeholder='correo' 
                                            borderRadius="full"
                                        />
                                        <Button colorScheme='blue'  mx='2'>
                                            Save
                                        </Button>
                                    </Flex>
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>
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
                        Puedes crear una cuenta para acceder gratuitamente a la comunidad de Waqya, donde podrás ver y dar tu opinión en diferentes Call for papers (C4P) más relevantes en la área de Ciencia de la Computación.
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