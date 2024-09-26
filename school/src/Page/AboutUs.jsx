import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';

function AboutUs() {
  return (
    <>
    <Nav/>
        <Flex p={5} bg="white" borderRadius="md" boxShadow="md" direction={['column', 'row']} align="center">
      {/* Left side: Text content */}
      <Box flex="1" pr={[0, 5]} mb={[4, 0]}>
        <Heading as="h1" size="2xl" color="teal.600" mb={4} paddingBottom={5}>
          About VIPS
        </Heading>
        <Text fontSize="lg" mb={4}>
          VIPS is a well-established, reputed, co-educational, international school situated at Godda, Jharkhand serving both local and expatriate communities.
          VIPS prides itself on its warmth and welcoming nature; cosmopolitan culture; open attitude towards students, teachers and parents; safe & secure environment; well-trained teachers; modern infrastructure; small class strengths; low student-teacher ratio and global curriculum.
        </Text>
        <Text fontSize="lg" mb={4}>
          VIPS believes that the primary purpose of a school is to guide the child in the discovery of themselves and their world.... to identify and nurture their talents. Just as every seed contains the future tree, each child is born with infinite potential. VIPS sees children as seeds to be nurtured - here the teacher is a gardener who helps to bring out the potential already present in the child. VIPS is the best possible environment for children to grow, to blossom and to evolve.
        </Text>
        <Text fontSize="lg">
          Link on advantageous location: VIPS is advantageously located at 5 min from Godda Bus Stand and only 3 min from Godda General Hospital.
        </Text>
      </Box>

      {/* Right side: Image */}
      <Image
        src="https://via.placeholder.com/800x300.png?text=VIPS+School"
        alt="VIPS School"
        borderRadius="md"
        flex="1"
        maxW="800px"
        objectFit="cover"
      />
    </Flex>
    <Footer/>
    
    </>

  );
}

export default AboutUs;
