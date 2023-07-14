import { Box, Flex,Text, VStack,Stack,Checkbox } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductCards from './ProductCards'

const ProductListingPage = () => {
  const booklist=[
    {
      src:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/368/9781501110368.jpg",
      title:"It Ends with Us",
      Author:"Colleen Hoover"
    },
    {
      src:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/126/9780143452126.jpg",
      title: "Do It Today",
      Author: "Foroux, Darius"
    },
    {
      src:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/831/9781847941831.jpg",
      title:"Atomic Habits",
      Author:"James Clear"

    },
    {
      src:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/179/9781398518179.jpg",
      title:"It Starts With Us",
      Author:"Colleen Hoover"
    },
    {
      src:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/791/9781473677791.jpg",
      title:"Nomads",
      Author:"Anthony Sattin"
    }
  ]
  return (
    <Box>
      <Navbar/>
      <Box w={"100%"} h={"auto"} pb={"60px"} bgColor={"#FCF9EA"}>
        <Flex justifyContent={"space-between"}>
          {/* Sidebar */}
          <Box h={"auto"} w={"25%"} p={"10px"} >
            <VStack gap={"10px"}>
            <Box w={"100%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} textAlign={"initial"}>
              <Text textStyle={"TBR"}>FILTERS</Text>
            </Box>

            <Box w={"100%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} textAlign={"initial"}>
              <Stack spacing={2} direction='column' >
              <Text textStyle={"singlepageText"}>No. Of Pages</Text>
                <Checkbox defaultChecked>150-300 Pages</Checkbox>
                <Checkbox >350-550 Pages</Checkbox>
                <Checkbox >550-750 Pages</Checkbox>
                <Checkbox >750-1000 Pages</Checkbox>
              </Stack>
            </Box>

            <Box w={"100%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} textAlign={"initial"}>
              <Stack spacing={2} direction='column' >
              <Text textStyle={"singlepageText"}>Availability</Text>
                <Checkbox defaultChecked>Exclude Out Of Stock</Checkbox>
              </Stack>
            </Box>

            <Box w={"100%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} textAlign={"initial"}>
              <Stack spacing={2} direction='column' >
              <Text textStyle={"singlepageText"}>Author</Text>
                <Checkbox >Agatha Christie</Checkbox>
                <Checkbox > Colleen Hoover</Checkbox>
                <Checkbox > J.K Rowling</Checkbox>
                <Checkbox >Jane Austen</Checkbox>
                <Checkbox >Stephen King</Checkbox>
                <Checkbox >Stephenie Meyer</Checkbox>
                <Checkbox >Harper Lee</Checkbox>
                <Checkbox >Jenny Han</Checkbox>
              </Stack>
            </Box>
            </VStack>

          </Box>
          <Box h={"auto"} w={"75%"} p={"10px"}>
          <VStack gap={"10px"}>
            <Box w={"100%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} textAlign={"initial"}>
                <Text textStyle={"TBR"}>BEST SELLERS</Text>
                <Text color={"#908484"}>(Showing 20 products of 78 products)</Text>
              </Box>
            
              <Box w={"100%"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"40px"} >
              {booklist.map((el, i) => (
                  <ProductCards key={i} data={el}/>
                ))}
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Footer/>
    </Box>
  )
}

export default ProductListingPage