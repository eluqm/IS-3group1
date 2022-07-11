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
import AboutUsCard from '../../../components/AboutUsCard';

const des = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione, autem iusto architecto molestias quasi nihil! Soluta culpa perferendis, deserunt inventore voluptatibus reiciendis, iusto et quo quas impedit eos tenetur?';

const AboutUs = () => {
    return(
        <Box bg='blue.600'>
            <VStack color='green.400' textAlign='center' spacing='10'  pt='10' pb='40'>
                <Heading mb='20' letterSpacing='2.5px' as='h1' fontSize='5xl' maxW={{base:'lg',md:'xl',lg:'2xl'}} > 
                    Sobre Nosotros
                </Heading>
                <Grid 
                    w='full'
                    templateRows='repeat(2,1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    color='black'
                >
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <AboutUsCard description={des}/>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <AboutUsCard description={des}/>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <Box  w='100%' mb='20' mr='6' p='2'>
                            <AboutUsCard  description={des}/>
                        </Box>
                        </GridItem>
                    <GridItem colSpan={2}>
                        <Box  w='100%'  mb='20' mr='6' p='2'>
                            <AboutUsCard description={des}/>
                        </Box>
                    </GridItem>
                </Grid>
            </VStack>
        </Box>
    );
}

export default AboutUs;