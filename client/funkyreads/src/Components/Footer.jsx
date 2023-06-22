import React from 'react'
import {Box,Flex, ListItem, UnorderedList,Image,Text} from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box w={"100%"} h={"auto"} bgColor={"#fcfcfc"} border={"1px solid grey"} pos={"fixed"} bottom={"0"}>
      <Box m="30px 0px 30px">
        <Flex justifyContent={"space-around"} dir='row'>

        <Box width={"10%"} h={"auto"} textAlign={"initial"}>
          <UnorderedList listStyleType={"none"}>
            <ListItem textStyle={"FooterHead"}> Company </ListItem>
            <ListItem textStyle={"FooterList"}>About Us</ListItem>
            <ListItem textStyle={"FooterList"}>Career</ListItem>
            <ListItem textStyle={"FooterList"}>Blog</ListItem>
            <ListItem textStyle={"FooterList"}>Contact Us</ListItem>
          </UnorderedList>
        </Box>
        <Box width={"10%"} h={"auto"} textAlign={"initial"}>
          <UnorderedList listStyleType={"none"}>
            <ListItem textStyle={"FooterHead"}> Policies</ListItem>
            <ListItem textStyle={"FooterList"}>Privacy Policies</ListItem>
            <ListItem textStyle={"FooterList"}>Terms of Use</ListItem>
            <ListItem textStyle={"FooterList"}>Secure Shopping</ListItem>
            <ListItem textStyle={"FooterList"}>Copyright Policy</ListItem>
          </UnorderedList>
        </Box>
        <Box width={"10%"} h={"auto"} textAlign={"initial"}>
          <UnorderedList listStyleType={"none"}>
            <ListItem textStyle={"FooterHead"}>Help</ListItem>
            <ListItem textStyle={"FooterList"}>Payment</ListItem>
            <ListItem textStyle={"FooterList"}>Shipping</ListItem>
            <ListItem textStyle={"FooterList"}>Return</ListItem>
            <ListItem textStyle={"FooterList"}>FAQ</ListItem>
          </UnorderedList>
        </Box>
        <Box width={"10%"} h={"auto"} textAlign={"initial"}>
          <UnorderedList listStyleType={"none"}>
            <ListItem textStyle={"FooterHead"}>Misc</ListItem>
            <ListItem textStyle={"FooterList"}>Affiliate</ListItem>
            <ListItem textStyle={"FooterList"}>Sitemap</ListItem>
          </UnorderedList>
        </Box>
        </Flex>
        </Box>
        <Box w={"30%"} ml={"35vw"} h="70px"   textAlign={"center"}>
          <Flex justifyContent={"center"}>
          <Image src="https://cdn-icons-png.flaticon.com/128/733/733614.png" alt='Instagram' w={"30px"} h={"30px"} mr={"10px"} />
          <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt='Facebook' w={"30px"} h={"30px"} mr={"10px"}  />
          <Image src='https://cdn-icons-png.flaticon.com/128/4494/4494477.png' alt='Twitter' w={"30px"} h={"30px"} mr={"10px"}/>
          <Image src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt='Linked in' w={"30px"} h={"30px"} mr={"10px"}/>
          <Image src='https://cdn-icons-png.flaticon.com/128/145/145808.png' alt='pinterest' w={"30px"} h={"30px"} mr={"10px"}/>
          </Flex>
        <Text fontSize={"14px"} color={"grey"}>Copyright © 2023 . Bookswagon.com. All Rights Reserved</Text>


      </Box>

    </Box>
  )
}

export default Footer