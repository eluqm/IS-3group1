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
    VStack
} from '@chakra-ui/react'
import React from 'react';

const Statistics = () => {
    return(
        <Box bg='blue.400'>
            <VStack color='green.400' textAlign='center' spacing='10'  pt='10' pb='60'>
                <Heading mb='10' letterSpacing='2.5px' as='h1' fontSize='5xl' maxW={{base:'lg',md:'xl',lg:'2xl'}}> 
                    Ofrecemos</Heading>
                <Grid 
                    w='full'
                    templateRows='repeat(2,1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={2}>
                        <Container w='100%' mr='6'>
                            <Text fontSize='6xl' color='white'>
                                +100
                            </Text>
                            <Text fontSize='3xl' color='green.300'>
                                Journals
                            </Text>
                        </Container>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <Container w='100%' ml='4'>
                            <Text fontSize='6xl' color='white'>
                                +90
                            </Text>
                            <Text fontSize='3xl' color='green.300'>
                                Eventos
                            </Text>
                        </Container>
                    </GridItem>
                    <GridItem colSpan={4} mt='5'>
                        <Text fontSize='6xl' color='white'>
                            +5
                        </Text>
                        <Text fontSize='3xl' color='green.300'>
                            Paises
                        </Text>
                    </GridItem>
                </Grid>
            </VStack>
        </Box>
    );
}

export default Statistics;