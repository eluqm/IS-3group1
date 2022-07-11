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
    VStack,
    Avatar,
    Badge
} from '@chakra-ui/react'
import React from 'react';
import prof from '../img/profile.jpg'

const CommCard = ({
    comment,
    date,
    mail,
}:{
    comment: string;
    date: string;
    mail: string;
}) =>{
    return(
        <VStack bg='blue.200' mx='20' textAlign='center' w='80%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <HStack p='4' w='full'>
                <Avatar size='md' name='profile' src={prof}/>
                <Badge borderRadius='full' px='2' colorScheme='teal'>{mail}</Badge>
                <Box  fontSize='xs' ml='2'> {date}</Box>
            </HStack>
            <Box px='4' pb='4' m='1' fontWeight='semibold' as='h4'>
                <Text>
                    {comment}
                </Text>
            </Box>
        </VStack>
    );
}

export default CommCard;