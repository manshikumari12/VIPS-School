import React from 'react'
import { Flex, VStack, Heading, Text, Box, Image, FormControl, FormLabel, Input, Button, Link } from '@chakra-ui/react';
import Nav from '../Component/Nav';
function Login() {
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
      alt="Login Illustration"
      objectFit="cover"
      height="100%"
      width="100%"
    />
  </Box>

  {/* Right Side Login Form */}
  <Box flex="1" p={8} bg="white">
    <VStack spacing={6} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" color="teal.600">
        Login
      </Heading>

    
      <Text fontSize="lg" textAlign="center" color="gray.700" paddingBottom={9}>
        "Welcome back! Log in to continue your journey."
      </Text>

      <FormControl id="email" isRequired>
        <FormLabel>Email:</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password:</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>

      <Button bg="teal.600" color="white" width="full" mt={4}>
        Login
      </Button>

    
      <Text textAlign="center" fontSize="sm" color="gray.500">
        Don't have an account?{' '}
        <Link href="/signup" color="teal.500" fontWeight="bold">
          Signup here
        </Link>
      </Text>
    </VStack>
  </Box>
</Flex>
</Flex>
    </>

);
}

export default Login
