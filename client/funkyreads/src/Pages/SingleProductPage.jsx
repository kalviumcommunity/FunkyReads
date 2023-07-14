import { Box, Flex,Image, Text,Button } from '@chakra-ui/react';
import React from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {useNavigate} from "react-router-dom"

const SingleProductPage = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const [currentImage,setCurrentImage] = React.useState("");
  const [isAddingData, setIsAddingData] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("To Be Read");
  const[data,setData] = React.useState({})
  console.log(id)
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

  let tobeRead = JSON.parse(localStorage.getItem("ToBeRead"))|| [];
  
  const RemoveData=(data)=>{
    const updatedData = tobeRead.filter((obj) => obj.title !== data.title);
    localStorage.setItem("ToBeRead", JSON.stringify(updatedData));
  }
  
  const handleClick = () => {
    if (!isAddingData) {
      setButtonText("Adding Data..");
      setIsAddingData(true);
      
      setTimeout(() => {
        setButtonText("Remove From TBR");
        tobeRead.push(data)
       localStorage.setItem("ToBeRead",JSON.stringify(tobeRead));
       localStorage.setItem("isAddingData", JSON.stringify(true));
      }, 2000);

      setTimeout(()=>{
        navigate("/tbr")
      },4000)
    } 
    else {
      setIsAddingData(false);
      RemoveData(data)
      setButtonText("To Be Read");
    }
  };

  React.useEffect(() => {
    const storedState = localStorage.getItem("isAddingData");
    if (storedState) {
      setIsAddingData(JSON.parse(storedState));
      setButtonText(JSON.parse(storedState) ? "Remove From TBR" : "ToBeRead");
    }
  }, []);
  

  React.useEffect(()=>{
    const filteredData = booklist.filter((el,i)=>{
      console.log(i,"id",id)
      if(i===Number(id)){
        return el;
      }
    })
    console.log(filteredData[0].src)
    setCurrentImage(filteredData[0].src)
    setData(filteredData[0]);
    
  },[])

  const buttonStyle = {
    backgroundColor: buttonText === "Remove From TBR" ? "red" : "#FFCB01",
  };
  return (
    <Box>
      <Navbar />
      <Box w={"100%"} h={"auto"} pb={"60px"} bgColor={"#FCF9EA"} >
          <Flex justifyContent={"space-around"} >
            {/* Image Mapping of the Book */}
            
              <Box width={"30%"} mt={"60px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderRadius={"10px"} p={"20px"} mb={"60px"}>
                <Flex justifyContent="center" alignItems={"center"}>
                  <Image src={currentImage} width={"50%"} />
                </Flex>
              </Box>
            

            {/* Book details */}
            <Box w={"50%"} mt={"60px"}  p={"20px"} textAlign={"initial"}>
                <Text textStyle={"singlePagehead"}>It Starts With Us (Paperback, Collen Hoover)</Text>
                {/* Stars */}

                <Flex gap={"10px"} alignItems={"baseline"}>
                <Text textStyle={"singlepageText"}>₹165</Text>
                <Text fontSize={"18px"} textDecoration="line-through">₹392</Text>
                <Text color={"#908484"}>(57% off)</Text>
                </Flex>

                <Text mt={"30px"} textStyle={"singlepageText"}>Description-</Text>
                <Text fontSize={"18px"}>Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favourite Atlas’ side of the story and shares what comes next in this long-anticipated sequel to the #1 Sunday Times bestseller It Ends with Us.</Text>

                <Button  onClick={handleClick} style={buttonStyle} mt={"70px"} p={"20px 50px 20px"} >
                {buttonText}
                </Button>

            </Box>
          </Flex>

      </Box>
      <Footer />
    </Box>
  )
}

export default SingleProductPage