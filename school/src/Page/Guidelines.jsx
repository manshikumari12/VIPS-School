import React from 'react';
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'; // Icon for guidelines
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';

function Guidelines() {
  return (
    <>
      <Nav />
      <Box p={4} bg="gray.50" minH="100%">
        <Box maxW="800px" mx="auto" p={6} bg="white" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="xl" color="teal.600" mb={4} textAlign="center">
            School Guidelines
          </Heading>

          <Text mb={6} fontSize="lg" color="gray.600" textAlign="center">
            VIPS adheres to international standards of education while maintaining
            a local ethos. The school provides a welcoming, respectful, and multicultural
            environment. Students, teachers, parents, and management work in synergy
            to ensure holistic development.
          </Text>

          <List spacing={5}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text as="span" fontWeight="bold">Admissions:</Text> Open year-round, mid-session transfers possible.
            </ListItem>

            <ListItem>
              <ListIcon as={FaCheckCircle} color="blue.500" />
              <Text as="span" fontWeight="bold">Curriculum:</Text> VIPS follows CBSE curriculum with a focus on NEP guidelines.
            </ListItem>

            <ListItem>
              <ListIcon as={FaCheckCircle} color="purple.500" />
              <Text as="span" fontWeight="bold">Class Size:</Text> Maximum of 24 students per class for individual attention.
            </ListItem>

            <ListItem>
              <ListIcon as={FaCheckCircle} color="yellow.500" />
              <Text as="span" fontWeight="bold">Private Tuitions:</Text> Discouraged; extra help is provided during school hours.
            </ListItem>

            <ListItem>
              <ListIcon as={FaCheckCircle} color="red.500" />
              <Text as="span" fontWeight="bold">Extracurriculars:</Text> Students are encouraged to participate in activities.
            </ListItem>
          </List>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Guidelines;
