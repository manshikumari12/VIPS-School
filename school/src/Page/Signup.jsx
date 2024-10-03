import React, { useState } from 'react';
import {
  Flex,
  VStack,
  Heading,
  Text,
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Select,
  useToast,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'; // Import icons for show/hide functionality
import Nav from '../Component/Nav';
import { useNavigate } from 'react-router-dom'; 

function Signup() {
  const [role, setRole] = useState('student'); // Default role is student
  const [name, setName] = useState(''); // State for name
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [showPassword, setShowPassword] = useState(false); // State for showing password
  const toast = useToast(); // Hook for displaying notifications
  const navigate = useNavigate(); 
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a user object
    const user = {
      name,
      email,
      password,
      role,
    };

    try {
      const response = await fetch('http://localhost:1111/user/signup', { // Adjust the URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // Convert user object to JSON string
      });

      const data = await response.json(); // Parse JSON response

      if (response.ok) {
        toast({
          title: 'Signup Successful.',
          description: data.msg,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/login")
      } else {
        throw new Error(data.msg); // Throw error if response is not ok
      }
    } catch (error) {
      toast({
        title: 'Signup Failed.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Nav />
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
            <VStack spacing={6} align="stretch" as="form" onSubmit={handleSignup}>
              <Heading as="h2" size="lg" textAlign="center" color="teal.600">
                Signup
              </Heading>

              <Text fontSize="lg" textAlign="center" color="gray.700" paddingBottom={9}>
                "Welcome to a world of learning and growth. Your journey starts here!"
              </Text>

              {/* Role Selection */}
              <FormControl id="role" isRequired>
                <FormLabel>Select Role:</FormLabel>
                <Select
                  bg="teal.600"
                  placeholder="Select role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="teacher">Teacher</option>
                </Select>
              </FormControl>

              <FormControl id="name" isRequired>
                <FormLabel>Name:</FormLabel>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update name state
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email:</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password:</FormLabel>
                <Flex align="center">
                  <Input
                    type={showPassword ? 'text' : 'password'} // Toggle password visibility
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                  />
                  <IconButton
                    variant="link"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                    ml={2}
                  />
                </Flex>
              </FormControl>

              <Button type="submit" bg="teal.600" color="white" width="full" mt={4}>
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
  );
}

export default Signup;
