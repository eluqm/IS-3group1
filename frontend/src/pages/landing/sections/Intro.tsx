import {
    Box, 
    Heading,
    Text,
    Link,
    Button,
    Container,
    Flex,
    Image,
    HStack,
    VStack
} from '@chakra-ui/react'
import React from 'react';
import bookImg from '../../../img/book.png'
const Intro = () => {
    return(
        <Box bg='blue.500'>
            <VStack color='green.100' textAlign='center' spacing='7' py='60'>
                <Heading letterSpacing='2.5px' as='h1' fontSize='6xl' maxW={{base:'lg',md:'xl',lg:'2xl'}}>
                    CALL FOR PAPERS
                </Heading>
                <Box w='40%'>
                    <Text color='whiteAlpha.500' fontSize='2xl'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita inventore hic ex nisi, autem magnam facere necessitatibus, unde sed laborum soluta tenetur ab fugiat repellendus. Maxime amet architecto magnam?
                    </Text>
                </Box>
                <HStack spacing='6'>
                    <Button mt='20' fontSize='15px' colorScheme='green'>
                        Empezar ahora
                    </Button>
                </HStack>
            </VStack>
        </Box>
        
    );
}


export default Intro;