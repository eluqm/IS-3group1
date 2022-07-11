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
    VStack
} from '@chakra-ui/react'
import React from 'react';
import CommCard from '../../../components/CommCard';

const comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi voluptates aspernatur provident veritatis laborum dolorem impedit aperiam! Temporibus eius inventore iste pariatur sed, dolores beatae enim libero rem vel.';

const Comments = () => {
    return(
        <Box bg='green.600'>
            <VStack color='blue.400' textAlign='center' spacing='10'  pt='10' pb='20'>
                <Heading mb='20' letterSpacing='2.5px' as='h1' fontSize='5xl' maxW={{base:'lg',md:'xl',lg:'2xl'}} > 
                    Comentario de Nuestros Usuarios
                </Heading>
                <Grid 
                    w='full'
                    templateRows='repeat(2,1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                    color='black'
                >
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <CommCard comment={comment} mail='sas.@gmail.com' date='4 jun 2022'/>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <CommCard comment={comment} mail='sas.@gmail.com' date='4 jun 2022'/>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <CommCard comment={comment} mail='sas.@gmail.com' date='4 jun 2022'/>  
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <CommCard comment={comment} mail='sas.@gmail.com' date='4 jun 2022'/>      
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <CommCard comment={comment} mail='sas.@gmail.com' date='4 jun 2022'/>  
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <CommCard comment={comment} mail='sas.@gmail.com' date='4 jun 2022'/>  
                        </Box>
                    </GridItem>
                </Grid>
            </VStack>
        </Box>
    );
}

export default Comments;