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
    Text
} from '@chakra-ui/react'
import React from 'react';

const JoinUs = () => {
    return(
        <Box py='150px' w='full' bg='blue.600'>
            <Heading mb='50px'> Unete a Nuestra Comunidad</Heading>
            <Container alignItems='center' justifyContent='center'>
                <Flex>
                    <Box w='170px' h='10' bg='red.500'>
                        Recibe news letter
                    </Box>
                    <Spacer />
                    <Box w='170px' h='10' bg='red.500'>
                        Crea tu cuenta
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default JoinUs;