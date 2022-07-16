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
import backImg from '../../../img/backgr.jpg';
import { motion, Variants } from "framer-motion";

const Intro = ({
    ObjAnima
}:{
    ObjAnima: Variants
}) => {
    return(
        <Box
            bgImage={backImg}
            bgRepeat='no-repeat'
            bgSize='cover'
            as={motion.div}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true, amount:0.9}}
        >
            <VStack
                bg='rgb(0 0 255 / 65%)'   
                textAlign='center' 
                spacing='7' 
                py='60'
            >
                <Heading
                    color='green.300'
                    as='h1' 
                    letterSpacing='2.5px'  
                    fontSize='6xl' 
                    maxW='xl'
                    borderColor='blackAlpha.900'
                >
                    CALL FOR PAPERS
                </Heading>
                
                <Box 
                    maxW='lg'
                    as={motion.div}
                    variants={ObjAnima}
                >
                    <Text 
                        color='whiteAlpha.800' 
                        fontSize='2xl' 
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit expedita inventore hic ex nisi, autem magnam facere necessitatibus, unde sed laborum soluta tenetur ab fugiat repellendus. Maxime amet architecto magnam?
                    </Text>
                </Box>

                <HStack
                    as={motion.div}
                    variants={ObjAnima} 
                    spacing='6'
                >
                    <Button
                        size='lg'
                        mt='20' 
                        colorScheme='green'
                        borderColor='green.900'
                    >
                        Empezar ahora
                    </Button>
                </HStack>

            </VStack>
        </Box>
        
    );
}


export default Intro;