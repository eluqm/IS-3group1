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
    HStack
} from '@chakra-ui/react'
import React from 'react';

const AboutUsCard = ({
    description,
}:{
    description: string;
}) =>{
    return(
        <HStack bg='green.200' mx='40' textAlign='center' w='65%' borderWidth='2px' borderRadius='lg' overflow='hidden'>
            <Box>
                ass
            </Box>
            <Box p='6'm='1' fontWeight='semibold' as='h4'>
                <Text>
                    {description}
                </Text>
            </Box>
        </HStack>
    );
}

export default AboutUsCard;