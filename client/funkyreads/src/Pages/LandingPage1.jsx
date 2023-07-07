import { Box,Button,Flex, Text,Image } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs";
import { IconContext } from 'react-icons';
import React from 'react'

const LandingPage1 = () => {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #000000 ,#525007, #F8EF15 95%)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  };
  return (
    <Box width={"100vw"} height={"100vh"} bgColor={"#FCF9EA"} pt={"3vh"}>

      {/* Top Navigation Button Section */}
      <Box width={"20%"} h={'auto'} ml={"80vw"}>
        <Flex justifyContent={"center"} gap={"32px"}>
           <Button textStyle={"LandingTopButton"} p={"20px 25px"} borderRadius={"40px"}>Contact</Button>
           <Button textStyle={"LandingTopButton"} p="20px 25px" borderRadius={"40px"} >About</Button>
        </Flex>
      </Box>

      {/* Heading */}
      <Box h={"35vh"} mt={"20vh"}>
         <Text textStyle={"Title"} style={containerStyle} >Funky Reads</Text>
         <ArrowDownIcon boxSize={20} fontWeight="bold"/>
      </Box>

      <Box width={"3%"} h={'auto'} ml={"95vw"} mt="90px">
         <Flex direction={"column"} gap={"10px"}>
          <IconContext.Provider value={{ color: '#AEA7A7',size: '2rem' }}>
          <BsFacebook />
        </IconContext.Provider>

        <IconContext.Provider value={{ color: '#AEA7A7',size: '2rem' }}>
           <BsTwitter />
        </IconContext.Provider>

        <IconContext.Provider value={{ color: '#AEA7A7',size: '2rem' }}>
          <BsInstagram />
        </IconContext.Provider>

         </Flex>
      </Box>

      {/* Slider Box */}
      <Box pos={"fixed"} width={"100vw"} bottom="0" h={"10vh"} bgColor={"#FFCB01"} borderRadius={"100% 100% 0px 0px"}>
        <Text textStyle={"ClickForMore"}>Click For More</Text>
      </Box>

    </Box>
  )
}

export default LandingPage1