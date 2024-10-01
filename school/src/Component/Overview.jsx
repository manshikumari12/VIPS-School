import React from 'react'
import {
  
    Box,
    Flex,
    Heading,
    Text,
    Divider,
 
  } from '@chakra-ui/react';
import Imageslide from './Imageslide';
function Overview() {
    return (
        <Box width="100%"height={"100%"} mx="auto" p={5}>
        <Flex
          direction="column"
          align="center"
          bg="blue.50"
          borderRadius="md"
          p={5}
          mb={5}
        >
          <Heading as="h1" size="2xl" color="teal.600">
            Welcome to VIPS
          </Heading>
          <Text fontSize="lg" color="gray.600" mt={2}>
            A Co-Educational International School in Godda, Jharkhand
          </Text>
        
          <Imageslide/>
        </Flex>
    
     
    
        <Divider my={5} />
    
    

    
    
        <Box textAlign="center" p={5} bg="blue.50" borderRadius="md">
          <Text fontSize="lg" color="teal.600">Join us at VIPS and nurture your child's potential!</Text>
        </Box>
    
        
      </Box>
      )
}

export default Overview
