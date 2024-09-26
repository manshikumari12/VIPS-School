
import React from 'react'
import { Box, Stack, Text, HStack, Button, VStack, Link } from '@chakra-ui/react'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
  return (
      
    <>
  
    <Box bg="black" color="white" py={6}>
 
      <VStack spacing={4} textAlign="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Useful Links
        </Text>
        <HStack spacing={6}>
          <Link href="/" color="white" _hover={{ color: "teal.300" }}>
            Home
          </Link>
          <Link href="/AboutUS" color="white" _hover={{ color: "teal.300" }}>
            About School
          </Link>

          <Link
             
              color="white"
              _hover={{ color: "teal.300" }}
              onClick={scrollToTop} 
            >
              Holiday List
            </Link>
            <Link
          
              color="white"
              _hover={{ color: "teal.300" }}
              onClick={scrollToTop} 
            >
              Guidelines
            </Link>
          
        </HStack>
      </VStack>

  
      <Stack spacing={4} textAlign="center">
        <Text>© 2024 VIPS . All rights reserved.</Text>
        <Text>Designed by Manshi Kumari </Text>

        <HStack justify="center" spacing={6}>
          <Button variant="link" colorScheme="whiteAlpha"  onClick={scrollToTop}  >
            Privacy Policy
          </Button>
          <Button variant="link" colorScheme="whiteAlpha"  onClick={scrollToTop}  >
            Terms of Service
          </Button>
        </HStack>
      </Stack>
    </Box>
   
  </>
  )
}

export default Footer
