import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";

const UserTab = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Flex
        w={["100%", "100%", "30%"]}
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
        minW={[null, null, "300px", "300px", "400px"]}
      >
        {/* <Flex alignContent="center">
          <InputGroup
            bgColor="#fff"
            mb={4}
            border="none"
            borderColor="#fff"
            borderRadius="10px"
            mr={2}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray" />}
            />
            <Input type="number" placeholder="Search" borderRadius="10px" />
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            fontSize="sm"
            bgColor="#fff"
            borderRadius="50%"
            p="10px"
            aria-label={""}
          />
          <Flex
            w={30}
            h={25}
            bgColor="#B57295"
            borderRadius="50%"
            color="#fff"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="100"
            fontSize="xs"
          >
            2
          </Flex>
        </Flex> */}
        <Heading letterSpacing="tight">Mi perfil.</Heading>
        <Box
          borderRadius="25px"
          mt={4}
          w="100%"
          h="130px"
          bgGradient="linear(to-t, #B57295, #29259A)"
        >
          <Flex
            p="1em"
            color="#fff"
            flexDir="column"
            h="100%"
            justifyContent="center"
          >
            <Center>
              <Avatar size='xl' name='Joel Perca' src="avatar-2.jpg"/>
            </Center>
          </Flex>
        </Box>
        <Flex flexDir="column" my={4}>
          <Flex justify="space-between" mb={2}>
            <Text>Nombres</Text>
            <Text fontWeight="bold">Joel</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text>Apellidos</Text>
            <Text fontWeight="bold">Perca</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Rol</Text>
            <Text fontWeight="bold">Admin</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Correo</Text>
            <Text fontWeight="bold">jperca@unsa.edu.pe</Text>
          </Flex>
        </Flex>
        
        <Flex justify="space-between">
          <Heading letterSpacing="tight" size="md" my={4}>
            Editar mi perfil
          </Heading>
          <Heading letterSpacing="tight" size="md" my={4}
            onClick={()=>{setShowForm(!showForm)}}
          >
            {showForm && (<FiChevronUp/>)}
            {!showForm && (<FiChevronDown/>)}
          </Heading>
        </Flex>
        
        {showForm && (
          <Box>
            <Text color="gray" mt={2} mb={2}>
              Nombres
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiCreditCard color="gray.700" />}
              />
              <Input type="number" placeholder="Joel" />
            </InputGroup>
            <Text color="gray" mt={4} mb={2}>
              Apellidos
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiDollarSign color="gray.700" />}
              />
              <Input type="number" placeholder="Perca" />
            </InputGroup>
            <Button
              mt={4}
              bgColor="blackAlpha.900"
              color="#fff"
              p={7}
              borderRadius={15}
            >
              Editar perfil
            </Button>
          </Box>
        )}
      </Flex>
    </>
  )
}

export default UserTab;