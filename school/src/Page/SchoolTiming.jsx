import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa'; 
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';

function SchoolTiming() {
  return (
    <>
      <Nav />
      <Box p={4} bg="gray.50" minH="100%">
        <Box maxW="800px" mx="auto" p={6} bg="white" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" color="teal.600" mb={4} textAlign="center">
            School Timings
          </Heading>

          <Text mb={6} fontSize="lg" color="gray.600" textAlign="center">
            VIPS operates from Monday to Friday, with additional activities available on Saturday mornings.
          </Text>

          <List spacing={5}>
            <ListItem>
              <ListIcon as={FaClock} color="blue.400" />
              <Text as="span" fontWeight="bold">Monday - Friday:</Text> 8:00 AM - 2:00 PM
            </ListItem>
            <Divider my={4} />

            <ListItem>
              <ListIcon as={FaClock} color="green.400" />
              <Text as="span" fontWeight="bold">Saturday (Extra Curricular Activities):</Text> 9:00 AM - 12:00 PM
            </ListItem>
            <Divider my={4} />

            <ListItem>
              <ListIcon as={FaClock} color="purple.400" />
              <Text as="span" fontWeight="bold">Office Hours:</Text> Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 12:00 PM
            </ListItem>
          </List>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default SchoolTiming;
