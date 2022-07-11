import {
    Box, 
    Container,
    Flex,
    Spacer,
    Grid,
    GridItem,
    Input,
    Button,
    ButtonGroup
} from '@chakra-ui/react';

import React from 'react';
import Intro from './sections/Intro';
import Statistics from './sections/Statistics';
import AboutUs from './sections/AboutUs';
import Comments from './sections/Comments';
import JoinUs from './sections/JoinUs';

const Landing = () => {
    return(
        <Box>
            <Intro />
            <Statistics />
            <AboutUs />
            <Comments />
            <JoinUs />
        </Box>
    );
}

export default Landing;