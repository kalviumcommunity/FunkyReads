import { Box,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';


const LandingPage2 = ({ setShowComponent2 }) => {
  const handleClick = () => {
    setShowComponent2(false);
  };

  const containerStyle = {
    background: 'linear-gradient(to bottom, #000000 ,#525007, #F8EF15 95%)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text'
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
    <Box width={"100vw"} height={"100vh"} bgColor={"#FCF9EA"} pt={"3vh"}>

      {/* Heading */}
      <Box h={"35vh"} mt={"20vh"}>
         <Text textStyle={"Title"} style={containerStyle} fontSize={"120px"}>Unplug and Connect</Text>
          <Text color={"#908484"} fontSize={"20px"} mt="-20px">A Digital Haven for Book Lovers to Discover, Engage, and Share</Text>
      </Box>

      <Box h={"10vh"} mt={"5vh"} >
        <Button h={"100%"} w={"400px"} fontSize={"22px"} borderRadius={"40px"} textStyle={"LandingTopButton"} onClick={handleClick}>Start Your Journey</Button>
      </Box>

      
    </Box>
    </motion.div>
  )
}

export default LandingPage2