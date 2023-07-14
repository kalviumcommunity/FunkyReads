import { Box, Image,Flex,Text,Button, VStack } from '@chakra-ui/react'
import React from 'react'

const ProductCards = ({data}) => {
  return (
    <Box  mt={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} >
        <Flex justifyContent="center" alignItems={"center"}>
            <Image src={data.src} />
                  
        </Flex>
        <VStack>
            <Text textStyle={"TBR"}>{data.title}</Text>
            <Text>{data.Author}</Text>
            
        </VStack>
    </Box>
  )
}

export default ProductCards