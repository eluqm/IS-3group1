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
import { motion, Variants } from "framer-motion";

const objMove: Variants ={
    offscreen: {
        y:10, 
        opacity:0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 4.0
        }
    }
} 

const Landing = () => {
    return(
        <Box>
            <Intro ObjAnima={objMove}/>
            <Statistics ObjAnima={objMove}/>
            <AboutUs ObjAnima={objMove}/>
            <Comments ObjAnima={objMove}/>
            <JoinUs ObjAnima={objMove}/>
        </Box>
    );
}

export default Landing;