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
    Text

} from '@chakra-ui/react'

const Footer = () => {
    return(
        /*
        <Container maxW='6x1' centerContent boxShadow={'md'} bg='white'>
            <Grid templateColumns='repeat(12, 1fr)' color={'black'}>
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
        */
       <Box>
            <Container maxW='6x1' centerContent boxShadow={'md'} bg='gray.50' >
                <Text> © 2022 Pocho's com. All rights reserved</Text>
            </Container>
        </Box>
    );
}

export default Footer;