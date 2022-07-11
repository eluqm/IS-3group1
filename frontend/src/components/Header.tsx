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
                    <Flex gap='2'>
                        <Input placeholder='Basic usage' />

                        <ButtonGroup>
                            <Button colorScheme={'gray'} variant='solid'>
                                s
                            </Button>
                            <Button colorScheme={'blue'} variant='solid'>
                                o
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </GridItem>

                <GridItem p='2' colEnd={15}>
                    <ButtonGroup gap='2'>
                        <Button colorScheme={'teal'} variant='solid'>
                        Log in
                        </Button>
                        <Button variant='link'>
                            Sign up
                        </Button>
                    </ButtonGroup>
                </GridItem>
            </Grid>   
        </Container>
    );
}

export default Header;