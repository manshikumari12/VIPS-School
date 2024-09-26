import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon, InfoOutlineIcon } from '@chakra-ui/icons'; 
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';

function Admission() {
  return (
<>
<Nav/>

<Box bg="#f7f7f7" py={10} px={6}>
      {/* Add icon to the headline */}
      <Heading textAlign="center" mb={6} color="teal.600" display="flex" justifyContent="center" alignItems="center">
        <Icon as={InfoOutlineIcon} color="teal.600" mr={2} /> {/* Icon before the text */}
        Admissions Process
      </Heading>

      <Text mb={6} fontSize="lg" textAlign="center">
        Admission to VIPS is open to all students, whether a foreign national or one of Indian nationality.
        VIPS maintains a very good teacher to student ratio (approximately 1:20), 
        ensuring that class sizes are restricted for personalized attention.
      </Text>

      <VStack spacing={6} align="start">
        <Box>
          <Heading size="md" color="teal.600">Key Admission Details:</Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <Icon as={CheckCircleIcon} color="teal.400" mr={2} />
              Our academic year runs from April to March. The threshold age for Pre-Nursery is three years.
            </ListItem>
            <ListItem>
              <Icon as={CheckCircleIcon} color="teal.400" mr={2} />
              Application forms can be obtained from the school office on weekdays (8:00 a.m. - 6:00 p.m.) 
              and Saturdays (9:00 a.m. - noon) or downloaded from the school website.
            </ListItem>
            <ListItem>
              <Icon as={CheckCircleIcon} color="teal.400" mr={2} />
              After submitting the application, candidates will be called for an observation session.
            </ListItem>
            <ListItem>
              <Icon as={CheckCircleIcon} color="teal.400" mr={2} />
              From class 1 onwards, candidates must qualify for a written test in Mathematics and English.
            </ListItem>
            <ListItem>
              <Icon as={CheckCircleIcon} color="teal.400" mr={2} />
              Successful candidates will have an observation session with the school counsellor 
              followed by a parent interview with the Board and Management.
            </ListItem>
          </List>
        </Box>
      </VStack>

      {/* Add button for Apply for Admission */}
      <Box textAlign="center" mt={8}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => {
            window.location.href = '/apply'; // Redirect to the application form page
          }}
        >
          Apply for Admission
        </Button>
      </Box>
    </Box>
<Footer/>
</>
  )
}

export default Admission






