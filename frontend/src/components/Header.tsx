import {
    Box, 
    Container,
    Flex,
    Spacer,
    Grid,
    GridItem,
    Input,
    Button
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import './Header.css'

const Header = () => {
    return(
        <Container maxW='full' centerContent boxShadow={'md'} bg='white'>
            <Grid templateColumns='repeat(12, 1fr)' color={'black'}>
                <GridItem p='2'>
                   <p className='title-waqya'>
                        Waqya
                   </p>
                </GridItem>
                <GridItem colSpan={8} p='2'>
                    <Input placeholder='Basic usage' color={'cyan.500'} />
                </GridItem>
                <GridItem pl='0.1' pt='2'>
                    <Button colorScheme='blue'><SearchIcon/></Button>
                </GridItem>
                <GridItem p='1'pt='15'>
                    Login
                </GridItem>
                <GridItem p='2' pt='15'>
                    Sign up
                </GridItem>
            </Grid>   
        </Container>
    );
}

export default Header;