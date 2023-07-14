import { Box, Image,Flex,Text,Button, VStack } from '@chakra-ui/react'
import React from 'react'

const TBRcards = ({data}) => {
    
    let tobeRead = JSON.parse(localStorage.getItem("ToBeRead"))|| [];
    
    const handleClick=()=>{
        const updatedData = tobeRead.filter((obj) => obj.title !== data.title);
        localStorage.setItem("ToBeRead", JSON.stringify(updatedData));
        localStorage.setItem("isAddingData", JSON.stringify(false));

    }
  return (
    <Box  mt={"30px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} >
        <Flex justifyContent="center" alignItems={"center"}>
            <Image src={data.src} />
                  
        </Flex>
        <VStack>
            <Text textStyle={"TBR"}>{data.title}</Text>
            <Text>{data.Author}</Text>
            <Button bgColor={"#FFCB01"} _hover={{bgColor:"black", color:"#ffcb01"}} onClick={handleClick}>Remove</Button>
        </VStack>
    </Box>
  )
}

export default TBRcards