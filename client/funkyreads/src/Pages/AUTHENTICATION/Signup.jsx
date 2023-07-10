import React from 'react'
import { Box,Input,Text,Flex,InputGroup,InputLeftAddon, FormControl} from '@chakra-ui/react'

const Signup = () => {
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
          <Text color={"#908484"} fontSize={"24px"} mt={"-20px"}>Register into your account</Text>
          </Box>

          <Box w={"100%"} h={"400px"} mt={"10%"} >
            
            <form>

            <Flex justifyContent={"space-around"}>
              <Input w={"45%"} bgColor={"#FCF9EA"} boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='First Name'></Input>
              <Input w={"45%"} bgColor={"#FCF9EA"} boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='Last Name'></Input>
            </Flex>

            <FormControl>
            <InputGroup mt={"30px"} w={"95%"} ml={"15px"}>
              <InputLeftAddon children='+91'  bgColor={"#FCF9EA"} boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}  />
              <Input  bgColor={"#FCF9EA"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='Contact Number'></Input>
             
            </InputGroup>
           </FormControl>

            <FormControl>
            <Input type='text' mt={"30px"} w={"95%"}  bgColor={"#FCF9EA"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='Email Address'></Input>
            </FormControl>

            <FormControl>
            <Input type='password' mt={"30px"} w={"95%"}  bgColor={"#FCF9EA"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} placeholder='Password'></Input>
            </FormControl>

            <Input mt={"30px"} w={"35%"} type='Submit'  bgColor={"#FFCB01"} border={"none"}  boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"} value='Register' fontWeight={"700"}></Input>

            </form>

            <Box mt={"7%"}>
            <Flex justifyContent={"center"}>
            <Text fontWeight={"700"}>Already Have An Account?</Text>
            <Text fontWeight={"700"} color={"red.600"}>Login Now.</Text>
            </Flex>
            </Box>
          </Box>
        </Box>
        

      </Box>
    </div>
  )
}

export default Signup