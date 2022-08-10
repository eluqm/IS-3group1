import {
  Box,
} from '@chakra-ui/react';


//import components
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './routes/landing/Landing'

function Home() {
  return (
    <Box className="App" bg='#f5f5f5'>
      <Header/>
      <Landing/>
      <Footer/>
    </Box>
  )
}

export default Home
