import React from 'react'
import {Box, Image,Flex,InputGroup,Input,InputRightElement,Button} from "@chakra-ui/react"
import logo from "../Assets/logo.png";
import {SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Box w={"100%"} h={"80px"} bgColor={"#FFCB01"} p={"5px 20px 5px"} pos={"sticky"} top={"0"}>
      <Flex justifyContent={"space-between"} dir='row'>
        {/* Logo */}
       <Image src={logo} w={"70px"} borderRadius={"50px"} />

       {/* Search bar */}
       <Box w={"40%"} p={"12px 0px 10px"}>
         
            <InputGroup>
            <Input bgColor={"white"} placeholder='Search for items'/>
            <InputRightElement w={"10%"} borderLeft={"2px solid black"} children={<SearchIcon boxSize={6}/>}> 
            </InputRightElement>
          </InputGroup>
         
       </Box>

       {/* Signup btn */}
       <Box w={"20%"} p={"12px 0px 10px"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button w="50%" fontSize={"20px"} fontFamily={"serif"}>Signup</Button>
        </Flex>
       </Box>
      </Flex>
    </Box>
  )
}

export default Navbar