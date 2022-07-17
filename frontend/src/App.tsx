import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  HStack,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Spacer,
  Image,
  Flex
} from '@chakra-ui/react';

//import components
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './routes/landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" bg='#f5f5f5'>
      <Header/>
      <Landing/>
      <Footer/>
    </Box>
  )
}

export default App
