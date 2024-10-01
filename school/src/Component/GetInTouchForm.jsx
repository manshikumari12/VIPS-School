


import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Box,
  Heading,
  useToast,
} from '@chakra-ui/react';

function GetInTouchForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); 
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true); 

    try {
      const response = await fetch('http://localhost:1111/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        toast({
          title: 'Success!',
          description: 'Your message has been submitted successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
     
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit the form');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit your message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <Box
      bg="white"
      p={[4, 6, 8]} 
      borderRadius="md"
      boxShadow="md"
      width={['90%', '80%', '60%', '50%']} 
      mx="auto" 
      mt={8} 
    >
      <Heading size="lg" color="teal.600" mb={4} textAlign="center">Get in Touch</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            name="fullName"
            placeholder="Your name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Your address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            placeholder="e.g. Godda"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>State</FormLabel>
          <Select
            name="state"
            placeholder="Please select"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="Jharkhand">Jharkhand</option>
            <option value="Bihar">Bihar</option>
            <option value="West Bengal">West Bengal</option>
            {/* Add more states as needed */}
          </Select>
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            placeholder="Your message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          width="full"
          type="submit"
          isLoading={isLoading} 
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default GetInTouchForm;

