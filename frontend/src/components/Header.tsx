import {
    Box, 
    Container,
    Flex,
    Spacer,
    Grid,
    GridItem,
    Input
} from '@chakra-ui/react'
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
                <GridItem colSpan={9} p='2'>
                    <Input placeholder='Basic usage' />
                </GridItem>
                <GridItem p='2'>
                    Login
                </GridItem>
                <GridItem p='2'>
                    Sign up
                </GridItem>
            </Grid>   
        </Container>
    );
}

export default Header;