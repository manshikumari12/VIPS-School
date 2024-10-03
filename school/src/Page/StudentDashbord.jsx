import React from 'react';
import { Box, Flex, VStack, Button, useDisclosure } from '@chakra-ui/react';
import SchoolNavbar from '../Component/SchoolNavbar';

const StudentDashboard = () => {
  const { isOpen, onToggle } = useDisclosure();

  const studentSections = [
    'My Classes',
    'Attendance',
    'Homework',
    'Exams',
    'Resources',
    'Performance Reports',
  ];

  return (
    <Box>
    
      <SchoolNavbar  role="Student"/>
      <Flex h="100vh" direction={{ base: 'column', md: 'row' }} mt={5}>
        <Box flex="1" display={{ base: 'none', md: 'block' }} />

        <Box flex="2" p={5}>
          <VStack align="start" spacing={4}>
            {studentSections.map((section, index) => (
              <Button key={index} width="full" bg="green.600" color="white">
                {section}
              </Button>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default StudentDashboard;
