import { Box ,Image} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TBRcards from './TBRcards'

const ToBeRead = () => {
  let tobeRead = JSON.parse(localStorage.getItem("ToBeRead"))|| [];
  console.log(tobeRead)
  

  return (
    <Box>
      <Navbar/>
      <Box w={"100%"} h={"auto"} pb={"60px"} bgColor={"#FCF9EA"}>
        <Box  p={"30px"} h={"300px"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"40px"} mb={"200px"}>
        {tobeRead.map((el, i) => (
            <TBRcards key={i} data={el}/>
          ))}
        </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default ToBeRead