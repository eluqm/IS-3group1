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
    SimpleGrid
} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react';
import CommCard from '../../../components/CommCard';
import { motion, Variants } from "framer-motion";

const commentaries = [
    {
        id: 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti quam temporibus, accusamus nobis reprehenderit iste inventore laudantium. Qui et aliquid tempora molestiae, ipsam laboriosam doloribus nam maiores eligendi blanditiis.',
        mail: 'sadasdsa@gmail.com',
        date: '4 jun 2022'
    },
    {
        id: 2,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti quam temporibus, accusamus nobis reprehenderit iste inventore laudantium. Qui et aliquid tempora molestiae, ipsam laboriosam doloribus nam maiores eligendi blanditiis.',
        mail: 'sadasdsa@gmail.com',
        date: '4 jun 2022'
    },
    {
        id: 3,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti quam temporibus, accusamus nobis reprehenderit iste inventore laudantium. Qui et aliquid tempora molestiae, ipsam laboriosam doloribus nam maiores eligendi blanditiis.',
        mail: 'sadasdsa@gmail.com',
        date: '4 jun 2022'
    },
    {
        id: 4,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti quam temporibus, accusamus nobis reprehenderit iste inventore laudantium. Qui et aliquid tempora molestiae, ipsam laboriosam doloribus nam maiores eligendi blanditiis.',
        mail: 'sadasdsa@gmail.com',
        date: '4 jun 2022'
    },
    {
        id: 5,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti quam temporibus, accusamus nobis reprehenderit iste inventore laudantium. Qui et aliquid tempora molestiae, ipsam laboriosam doloribus nam maiores eligendi blanditiis.',
        mail: 'sadasdsa@gmail.com',
        date: '4 jun 2022'
    },
    {
        id: 6,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti quam temporibus, accusamus nobis reprehenderit iste inventore laudantium. Qui et aliquid tempora molestiae, ipsam laboriosam doloribus nam maiores eligendi blanditiis.',
        mail: 'sadasdsa@gmail.com',
        date: '4 jun 2022'
    },
]

const Comments = ({
    ObjAnima
}:{
    ObjAnima: Variants
}) => {

    let [usercom,setUsercom] = useState([
        {
            id:0,
            comment: '',
            mail: '',
            date: '',
        }
    ]);

    useEffect(()=>{
        setUsercom(usercom = commentaries);
    },[]);

    return(
        <Box 
        bgGradient='linear(to-l, facebook.50, facebook.100)'
            as={motion.div}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true, amount:0.8}}
        >
            <VStack 
                color='green.400' 
                textAlign='center' 
                spacing='10'  
                pt='20' pb='20'
            >
                <Heading
                    textTransform='uppercase' 
                    mb='10' 
                    letterSpacing='2.5px' 
                    fontSize={{base:'3xl', md:'4xl', lg:'5xl'}} 
                    maxW='xl' 
                > 
                    Comentario de Nuestros Usuarios
                </Heading>
                
                <SimpleGrid 
                    maxW='7xl' 
                    columns={{base:1,md:2,lg:3}} 
                    spacing={4}
                    color='black'
                    pb='5'
                    as={motion.div}
                    variants={ObjAnima}
                >
                    {
                        usercom.map(it => (
                            <Box key={it.id}>
                                <CommCard 
                                    comment={it.comment} 
                                    mail={it.mail}
                                    date={it.date}
                                />
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </VStack>
        </Box>
    );
}

export default Comments;