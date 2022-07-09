import { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import logo from './logo.svg'
import './App.css'

//for chakra-ui
import { Box } from '@chakra-ui/react'

//import components
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" bg='#f5f5f5'>
      <Header/>
      <Grid
    
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </Box>
  )
}

export default App
