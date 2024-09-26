import React from 'react'
import { Flex,Stack,HStack,Heading,Button,useColorModeValue,Link } from '@chakra-ui/react'
function Nav() {
  return (
    <>


    <Flex 
    minHeight={"10vh"}
    border={"1px solid"}
    bg={useColorModeValue("teal.600")}
    px={6}
    justify={"center"}
    align={"center"}
    >
       <Stack display={"flex"} justify={"center"} align={"center"} width={"full"}>
           <HStack pacing={12} width={"full"} justify={"space-between"}>
               <Heading color={"whitesmoke"}>VIPS</Heading>
                 <HStack>
               <Button>
               <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
               Home
                   </Link>
                </Button>


               <Button>
               <Link href='/AboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>
               About
                   </Link>
                </Button>


                <Button>
               <Link href='/admission' style={{ textDecoration: 'none', color: 'inherit' }}>
               Admission
                   </Link>
                </Button>
               <Button>
                   <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                   Signup/Login
                   </Link>
                </Button>
   
                <Button>
                   <Link href='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                 your profile
                   </Link>
                </Button>
   
           </HStack>
           </HStack>
         
       </Stack>
   
   
    </Flex>
    </>
  )
}

export default Nav
