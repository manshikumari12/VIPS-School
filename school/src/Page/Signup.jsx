import React from 'react'
import { Flex,VStack,Heading,Text,Box,Image , FormControl,FormLabel,Input,Button,Link} from '@chakra-ui/react'
import Nav from '../Component/Nav'
function Signup() {
  return (
   <>
   <Nav/>
     <Flex minH={"100vh"} justify="center" align="center" p={8}>
       
       <Flex
         direction={{ base: "column", md: "row" }}
         border="1px solid"
         borderColor="gray.200"
         boxShadow="lg"
         borderRadius="md"
         overflow="hidden"
         width="full"
         maxW="1200px"
       >
         {/* Left Side Image */}

         
         <Box flex="1" display={{ base: "none", md: "block" }}>
           <Image
             src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
             alt="Signup Illustration"
             objectFit="cover"
             height="100%"
             width="100%"
           />
         </Box>
 
         {/* Right Side Signup Form */}


         <Box flex="1" p={8} bg="white">
           <VStack spacing={6} align="stretch">
             <Heading as="h2" size="lg" textAlign="center" color="teal.600">
               Signup
             </Heading>
 
         
             <Text fontSize="lg" textAlign="center" color="gray.700" paddingBottom={9}>
               "Welcome to a world of learning and growth. Your journey starts here!"
             </Text>
 
             <FormControl id="name" isRequired>
               <FormLabel>Name:</FormLabel>
               <Input placeholder="Enter your name" />
             </FormControl>
 
             <FormControl id="email" isRequired>
               <FormLabel>Email:</FormLabel>
               <Input type="email" placeholder="Enter your email" />
             </FormControl>
 
             <FormControl id="password" isRequired>
               <FormLabel>Password:</FormLabel>
               <Input type="password" placeholder="Enter your password" />
             </FormControl>
 
             <Button bg="teal.600" color="white" width="full" mt={4}>
               Sign Up
             </Button>
 
             <Text textAlign="center" fontSize="sm" color="gray.500">
               Already signed up?{' '}
               <Link href="/login" color="teal.500" fontWeight="bold">
                 Login here
               </Link>
             </Text>
           </VStack>
         </Box>
       </Flex>
     </Flex>
   </>
  )
}

export default Signup
