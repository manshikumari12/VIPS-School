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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'; 
import Nav from '../Component/Nav';

function Login() {
  const [role, setRole] = useState('student'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const toast = useToast(); 
  const navigate = useNavigate(); 
 
  const handleLogin = async (e) => {
    e.preventDefault(); 
    
    const loginData = {
      email,
      password,
      role, 
    };

    try {
      const response = await fetch('http://localhost:1111/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), 
      });

      const data = await response.json(); 

      if (response.ok) {
    
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userid); 
        sessionStorage.setItem('role', data.role); 

        toast({
          title: 'Login Successful.',
          description: data.msg,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

     
        navigate('/schooldashbord'); 
        
      } else {
        throw new Error(data.msg); 
      }
    } catch (error) {
      toast({
        title: 'Login Failed.',
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
              alt="Login Illustration"
              objectFit="cover"
              height="100%"
              width="100%"
            />
          </Box>

          {/* Right Side Login Form */}
          <Box flex="1" p={8} bg="white">
            <VStack spacing={6} align="stretch" as="form" onSubmit={handleLogin}>
              <Heading as="h2" size="lg" textAlign="center" color="teal.600">
                Login
              </Heading>

              <Text fontSize="lg" textAlign="center" color="gray.700" paddingBottom={9}>
                "Welcome back! Log in to continue your journey."
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

              <FormControl id="email" isRequired>
                <FormLabel>Email:</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password:</FormLabel>
                <Flex align="center">
                  <Input
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <IconButton
                    variant="link"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowPassword(!showPassword)} 
                    ml={2}
                  />
                </Flex>
              </FormControl>

              <Button type="submit" bg="teal.600" color="white" width="full" mt={4}>
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

export default Login;
