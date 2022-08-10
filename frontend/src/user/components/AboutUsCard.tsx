import {
    Box, 
    Container,
    Flex,
    Spacer,
    Grid,
    GridItem,
    Image,
    Button,
    ButtonGroup,
    Text,
    Heading,
    HStack,
    SimpleGrid
} from '@chakra-ui/react'
import React from 'react';
import bookImage from '../img/books.png'
import univImage from '../img/university.png'
import unitImage from '../img/united.png'
import respoImage from '../img/responsive.png'
import { motion } from "framer-motion";

const cards=[
    {
        title: 'book',
        image: bookImage
    },
    {
        title: 'univ',
        image: univImage
    },
    {
        title: 'unit',
        image: unitImage
    },
    {
        title: 'respon',
        image: respoImage
    }
]

const AboutUsCard = ({
    description,
    intImage
}:{
    description: string;
    intImage: number;
}) =>{
    return(
            <SimpleGrid 
                bg='linear-gradient(86deg, rgba(120,252,57,1) 6%, rgba(174,251,129,1) 100%)'  
                textAlign='center' 
                borderWidth='2px' borderRadius='lg'
                boxShadow='lg' 
                overflow='hidden'
                columns={{base:1,md:2}} 
                spacing={6}
                maxW='xl'
                p='2' m='2'
                as={motion.div}
                whileHover={{ scale: 1.05 }}
            >
                <SimpleGrid w={{base:'40%', sm:'50%', md:'100%'}} m='2' p='2' mx={{base: '20', sm: '40', md: '0'}}>
                    <Image
                        justifyContent='center' 
                        alignContent='center' 
                        objectFit={'cover'} 
                        src={cards[intImage].image} 
                        alt='book'
                    />
                </SimpleGrid>

                <Box 
                    p='2'
                    m='1' 
                    fontWeight='semibold' 
                    as='h4'
                >
                    <Text maxW='xl'>
                        {description}
                    </Text>
                </Box>
            </SimpleGrid>
    );
}

export default AboutUsCard;