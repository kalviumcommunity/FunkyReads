import React,{useState} from 'react'
import {Box,Divider,Image,Text,Flex,IconButton} from "@chakra-ui/react"
import {BiSolidRightArrow,BiSolidLeftArrow } from "react-icons/bi";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconContext } from 'react-icons';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[categoryIndex,setCategoryIndex] = useState(0);

  

  const images = [
    "https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.6",
    "https://www.bookswagon.com/images/bannerimages/80_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6",
    "https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8",
    "https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8", 
  ]

  const category=[
    {
      icon:"https://www.bookswagon.com/Images/staticimages/icon1.png",
      text: "Best Seller"
    },
    {
      icon:"https://www.bookswagon.com/Images/staticimages/icon8.png",
      text: "Award Winners"
    },
    {
      icon:"https://www.bookswagon.com/Images/staticimages/icon4.png",
      text: "Box Sets"
    },
    {
      icon:"https://www.bookswagon.com/Images/staticimages/icon7.png",
      text: "International Best Sellers"
    },
    {
      icon:"https://www.bookswagon.com/Images/staticimages/icon2.png",
      text: "New Arrivals"
    },
    {
      icon: "https://www.bookswagon.com/Images/staticimages/icon5.png",
      text: "Ficton Books"
    },
    {
      icon:"https://www.bookswagon.com/Images/staticimages/TodaysDeal.png",
      text: "Today's Deal"
    },
    {
      icon:"https://www.bookswagon.com/Images/staticimages/tarot.png",
      text: "Tarot Cards"
    }
      

  ]

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


  const visibleIcons = category.slice(categoryIndex,categoryIndex  + 5);
  const remainingIcons = 5 - visibleIcons.length;
  const additionalIcons = category.slice(0, remainingIcons);

  const handleNext = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  const handlePrev = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  const handleCategoryNext = ()=>{
    setCategoryIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );

  }

  const handleCategoryPrev = ()=>{
    setCategoryIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div>
      <Navbar/>
      <Box w={"100%"} h={"auto"} bgColor={"#FCF9EA"} >
      
        {/* Carousal */}
        <Box textAlign="center" >
        <Image src={images[currentIndex]} width={"100%"} pos={"relative"}/>

          
          <Box bgColor={"black"} onClick={handlePrev} pos={"absolute"} top={"250px"} left={"3%"} p={"10px"} borderRadius={"50%"}>
        <IconContext.Provider value={{ color: '#FFCB01',size: '3rem' }}>
            <BiSolidLeftArrow/>
          </IconContext.Provider>
          </Box>

          <Box bgColor={"black"} onClick={handleNext} pos={"absolute"} top={"250px"} left={"93%"} p={"10px"} borderRadius={"50%"}>
          <IconContext.Provider value={{ color: '#FFCB01',size: '3rem' }}>
            <BiSolidRightArrow/>
          </IconContext.Provider>
          </Box>
        
        </Box>

        {/* Heading */}
        <Box mt={"20px"} h={"auto"}>
          <Text textStyle={"categoryHead"}>Get Ready to Rock Your Reading World!</Text>
          <Text textStyle={"categorySubHead"}>Choose Your Epic Literary Adventure!</Text>
        </Box>

        {/* Horizontal line for the category section */}
          <Flex justifyContent="center">
          <Divider borderColor="black" w={"90%"}  borderWidth="1px" mt={"45px"}/>
          </Flex>

        {/* Categories */}
        <Box mt={"10px"} p={"10px"} h={"100px"} mb={"40px"}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box onClick={handleCategoryPrev}>
                <ChevronLeftIcon  mr={4} boxSize={8}/>
            </Box>
            
            <Flex overflow="hidden">
              {visibleIcons.map((el, index) => (
                <Box key={index}>
                  <Image src={el.icon} alt={`Image ${index}`} m={"0px 100px 0px"} w={"35%"} />
                  <Text>{el.text}</Text>
                </Box>
              ))}

              {additionalIcons.map((el, index) => (
                <Box key={index} >
                  <Image src={el.icon} alt={`Image ${index}`} m={"0px 100px 0px"} w={"35%"} />
                  <Text>{el.text}</Text>
                </Box>
              ))}
            </Flex>

            <Box onClick={handleCategoryNext}>
                <ChevronRightIcon  mr={4} boxSize={8}/>
            </Box>
            
          </Flex>
        </Box>

        {/* Horizontal line for the category section */}
        <Flex justifyContent="center">
          <Divider borderColor="black" w={"90%"}  borderWidth="1px" mt={"15px"}/>
        </Flex>

        {/* 1st Book Listing */}
        <Text textStyle={"categoryHead"} textAlign={"initial"} m="20px 0px 20px 70px">Best Sellers</Text>
                
        <Flex justifyContent="center">
          <Divider borderColor="black" w={"90%"}  borderWidth="1px"/>
        </Flex>

        <Flex overflow="hidden">
              {booklist.map((el, index) => (
              <Link key={index} to={`/products/${index}`}>
                <Box  mt={"30px"}>
                  <Image src={el.src} alt={`Image ${index}`} m={"0px 90px 0px"} w={"35%"} />
                  <Text fontSize={"20px"} fontWeight={"700"}>{el.title}</Text>
                  <Text>{el.Author}</Text>
                </Box>
             </Link>
              ))}
        </Flex>

        <Flex justifyContent="center">
          <Divider borderColor="black" w={"90%"}  borderWidth="1px" mt={"45px"}/>
        </Flex>

        {/* 2nd Book Listing */}
        <Text textStyle={"categoryHead"} textAlign={"initial"} m="20px 0px 20px 70px">New Arrivals</Text>
                
        <Flex justifyContent="center">
          <Divider borderColor="black" w={"90%"}  borderWidth="1px"/>
        </Flex>

        <Flex overflow="hidden">
              {booklist.map((el, index) => (
                <Link key={index} to={`/products/${index}`}>
                <Box  mt={"30px"}>
                  <Image src={el.src} alt={`Image ${index}`} m={"0px 90px 0px"} w={"35%"} />
                  <Text fontSize={"20px"} fontWeight={"700"}>{el.title}</Text>
                  <Text>{el.Author}</Text>
                </Box>
                </Link>
              ))}
        </Flex>

        <Flex justifyContent="center">
          <Divider borderColor="black" w={"90%"}  borderWidth="1px" mt={"45px"} mb={"50px"}/>
        </Flex>


      </Box>
      <Footer/>
    </div>
  )
}

export default CategoryPage