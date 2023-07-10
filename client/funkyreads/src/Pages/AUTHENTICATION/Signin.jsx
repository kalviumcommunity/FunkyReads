import React from 'react'
import { Box,Input,Text,Flex, FormControl} from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const styles = {
    container: {
      backgroundImage: `url(${"https://shorturl.at/uNOT1"})`,
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
    },
     containerStyle : {
      background: 'linear-gradient(to bottom, #000000 ,#525007, #F8EF15 95%)',
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
    }
    
  };
  return (
    <div>
    <Box style={styles.container} pos={"relative"} >
      <Box pos={"absolute"} width={"32vw"} h={"80vh"} borderRadius={"20px"} background='rgba(252, 249, 234, 0.4)' top={"10vh"} left={"55vw"} p={"25px"} >
        <Box  >
        <Text style={styles.containerStyle} textStyle={"authPageHead"} mt={"3%"}>Funky Reads</Text>
        <Text color={"#908484"} fontSize={"24px"} mt={"-20px"}>Login to your account</Text>
        </Box>

        <Box w={"100%"} h={"400px"} mt={"10%"} >
          
          <form>
          <FormControl>
          <Input type='text' mt={"30px"} w={"95%"}  bgColor={"#FCF9EA"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='Email Address'></Input>
          </FormControl>

          <FormControl>
          <Input type='password' mt={"30px"} w={"95%"}  bgColor={"#FCF9EA"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='Password'></Input>
          </FormControl>

          <Input mt={"30px"} w={"35%"} type='Submit'  bgColor={"#FFCB01"} border={"none"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} value='Login' fontWeight={"700"}></Input>

          </form>

          <Box mt={"7%"} textAlign={"center"}>
          <Text color={"#908484"}>or login with</Text>

          <Flex justifyContent={"center"} >
          <Box bgColor={"white"} ml={"20px"} p={"10px"}>
            <IconContext.Provider value={{ color: '#1877F2',size: '2rem' }}>
            <BsFacebook />
            </IconContext.Provider>
          </Box>


          <Box bgColor={"white"} ml={"20px"} p={"10px"}>
              <IconContext.Provider value={{size: '2rem' }}>
               <FcGoogle/>
            </IconContext.Provider>
          </Box>

          <Box bgColor={"white"} ml={"20px"} p={"10px"}>
              <IconContext.Provider value={{color: '#1877F2',size: '2rem' }}>
              <BsTwitter />
            </IconContext.Provider>
          </Box>

          </Flex>
          </Box>

          <Box mt={"7%"}>
          <Flex justifyContent={"center"}>
          <Text fontWeight={"700"}>Don't Have An Account?</Text>
          <Text fontWeight={"700"} color={"red.600"}>Register Now.</Text>
          </Flex>
          </Box>
        </Box>
      </Box>
      

    </Box>
  </div>
  )
}

export default Signin