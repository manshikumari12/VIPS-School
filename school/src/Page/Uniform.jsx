import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import { FaTshirt, FaShoePrints, FaSnowflake } from 'react-icons/fa'; // Icons for uniform categories
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';

function Uniform() {
  return (
    <>
      <Nav />
      <Box p={4} bg="gray.50" minH="100%">
        <Box maxW="800px" mx="auto" p={6} bg="white" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" color="teal.600" mb={4} textAlign="center">
            School Uniform
          </Heading>

          <Text mb={6} fontSize="lg" color="gray.600" textAlign="center">
            At VIPS, students are required to wear a smart and neat uniform that reflects the school’s values of discipline and equality.
          </Text>

          <List spacing={5}>
            <ListItem>
              <ListIcon as={FaTshirt} color="blue.400" />
              <Text as="span" fontWeight="bold">Regular Uniform:</Text> White shirt with school logo, navy blue trousers/skirts, black shoes, and school tie.
            </ListItem>
            <Divider my={4} />

            <ListItem>
              <ListIcon as={FaShoePrints} color="green.400" />
              <Text as="span" fontWeight="bold">Sports Uniform:</Text> White t-shirt with school logo, navy blue track pants, white sports shoes, and school cap.
            </ListItem>
            <Divider my={4} />

            <ListItem>
              <ListIcon as={FaSnowflake} color="purple.400" />
              <Text as="span" fontWeight="bold">Winter Uniform:</Text> Navy blue sweater or blazer with school logo, white shirt, and grey trousers/skirts.
            </ListItem>
          </List>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Uniform;
