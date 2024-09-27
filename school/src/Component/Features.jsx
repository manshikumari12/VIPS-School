import React from 'react';
import {
  List,
  ListItem,
  Box,
  Heading,
  Text, 
  Stack, 
  Icon, 
  Flex,
  VStack,
  Image} from '@chakra-ui/react';
import image5 from "../Assets/image5.jpg";
import { CheckCircleIcon } from '@chakra-ui/icons';
import HoverImagelist from './HoverImagelist';

function Features() {
    return (
        <>
        <Box bg="#f7f7f7" py={10} px={6}>
            <Heading textAlign="center" mb={10} color="teal.600">
              Vision & Mission
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
              mx="auto"
              maxW="1200px" 
            >
              {/* Left Side: Image */}
              <Box flex="1" mb={{ base: 6, md: 0 }} textAlign="center">
                <Image 
                  src={image5} 
                  alt="VIPS Vision and Mission" 
                  borderRadius="lg" 
                  maxW="100%" 
                />
              </Box>
      
              {/* Right Side: Details about Vision and Mission */}
              <Box flex="1" px={4}>
                <Text fontSize="lg" mb={4}>
                  <strong>Vision:</strong> By 2020, VIPS will be recognized as a school that sets the benchmark in India for its learner-centric individualized and holistic education. This will enable our students to be lifelong learners with an inclusive and socially responsible worldview, capable of leading themselves and others in the fast-changing world.
                </Text>
                <Text fontSize="lg">
                  <strong>Mission:</strong> The mission of VIPS is to impart comprehensive, student-centred education compatible with international standards. The school shall provide a welcoming, respectful, and multi-cultural environment, enabling superior academic accomplishment. For the smooth functioning of the school, the guidelines are laid down by the policymakers, and the strategic plans are based on the outcomes of parent-teacher and board of directors meetings.
                </Text>
              </Box>
            </Flex>
          </Box>
           <Box bg="#f7f7f7" py={10} px={6}>
            <Heading textAlign="center" mb={10} color="teal.600">
              Why VIPS?
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }} 
              justify="space-between"
              mx="auto"
              maxW="1200px" 
            >
              {/* Section 1: Admissions */}
              <Box flex="1" m={4} p={5} borderRadius="md" bg="white" boxShadow="md">
                <Heading size="md" mb={4}>Flexible Admissions</Heading>
                <Text>
                  School sessions differ from country to country, so VIPS warmly welcomes admissions throughout the year. This ensures that every student who moves to Godda, Jharkhand, even in the middle of the session, does not have to sit out for a year. Students welcome their new friends who fit in immediately with the VIPS spirit.
                </Text>
              </Box>
      
              {/* Section 2: Interaction & Safety */}
              <Box flex="1" m={4} p={5} borderRadius="md" bg="white" boxShadow="md">
                <Heading size="md" mb={4}>Healthy Interaction & Safety</Heading>
                <Text>
                  VIPS encourages a healthy interaction between all stakeholders—parents, students, teachers, staff, and management. Every child is looked after with care and dedication, creating a "home away from home" feeling. Regular training for dedicated teachers ensures students remain engaged and supported.
                </Text>
              </Box>
      
              {/* Section 3: Infrastructure & Extracurriculars */}
              <Box flex="1" m={4} p={5} borderRadius="md" bg="white" boxShadow="md">
                <Heading size="md" mb={4}>Modern Infrastructure & Activities</Heading>
                <Text>
                  VIPS boasts a sprawling 3-acre campus equipped with air-conditioned classrooms, 3D interactive learning spaces, and a mini playground for kids. Each class has a maximum of 24 students, ensuring personalized attention. Extracurricular activities are equally respected, promoting a well-rounded upbringing for all children.
                </Text>
              </Box>
            </Flex>
          </Box>
      
       <Box bg="#f7f7f7" py={10} px={6}>
            <Heading textAlign="center" mb={10} color="teal.600">
              Academics
            </Heading>
            
            <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center">
              {/* Curriculum Section */}
              <Box flex="1" m={4} p={5} borderRadius="md" bg="white" boxShadow="md">
                <Heading size="lg" mb={4}>The Curriculum</Heading>
                <Text mb={4}>
                  VIPS offers a CBSE curriculum for all its graduating classes, adhering to the guidelines of CBSE, New Delhi. 
                  Our curriculum strongly follows the NEP pattern, ensuring that all textbooks provided align with NEP and CBSE recommendations.
                </Text>
                <Text mb={4}>
                  All conventional school subjects are taught, including languages, art, and computer science. 
                  Private tuitions are discouraged; instead, extra help is offered during school hours, and students can stay back after lessons to catch up.
                </Text>
              </Box>
      
              {/* After School Program Section */}
              <Box flex="1" m={4} p={5} borderRadius="md" bg="white" boxShadow="md">
                <Heading size="lg" mb={4}>After School Program</Heading>
                <Text mb={4}>
                  VIPS offers an "After School School" program where students from other schools can join. 
                  This program is designed to provide a clear understanding of subjects through 3D animation and expert teaching.
                </Text>
                <Text mb={4}>
                  It is tailored for students seeking deep knowledge of the subject matter, ensuring they have the support they need.
                </Text>
              </Box>
            </Flex>
      
            {/* Advanced Learning Program Section */}
            <Box m={4} p={5} borderRadius="md" bg="white" boxShadow="md" mt={10}>
              <Heading size="lg" mb={4}>Advanced Learning Program</Heading>
              <Text mb={4}>
                VIPS has an Advanced Learning Programme (ALP) for students in class 4 and those in the middle and senior school. 
                This program identifies talented students in Mathematics, Science, or Verbal Reasoning, providing them with a challenging educational experience.
              </Text>
              <Text mb={4}>
                Talented students are grouped to study Math and Humanities at a higher level, identified through assessments in Math, English, Science, and Reading.
              </Text>
            </Box>
          </Box>
      
      
      
      
      
      
      
          <Box bg="#f7f7f7" py={10} px={6}>
            <Heading textAlign="center" mb={10} color="teal.600">
              Team VIPS
            </Heading>
            <Stack spacing={4} align="center">
              <Text fontSize="lg" fontWeight="bold">Core Management Team</Text>
              <Text>Mrs. VishwaTara Devi</Text>
              <Text>Mr. Rakesh Vaidya</Text>
              <Text>Mr. Ravi Kumar</Text>
              <Text>Mr. Vikash Kumar</Text>
              <Text>Mr. Arvind Kumar</Text>
              <Text>Ms. Pushpam</Text>
            </Stack>



            <Box paddingBottom={20} paddingTop={20}>
      <HoverImagelist/>
      </Box>


          </Box>
      

     
      
     
      
          
          </>
      
      
      
        )
}

export default Features





















