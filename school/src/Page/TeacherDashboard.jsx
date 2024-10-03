import React from 'react';
import { Box, Flex, VStack, Button, useDisclosure } from '@chakra-ui/react';
import SchoolDashboard from './SchoolDashboard';


const TeacherDashboard = () => {
  const { isOpen, onToggle } = useDisclosure();

  const teacherSections = [
    'My Classes',
    'Student Reports',
    'Assignments',
    'Exams',
    'Attendance',
    'Resources',
    'Communication',
  ];

  return (
    <Box>
        <SchoolDashboard  role="Teacher"/>
    
      <Flex h="100vh" direction={{ base: 'column', md: 'row' }} mt={5}>
        <Box flex="1" display={{ base: 'none', md: 'block' }} />

        <Box flex="2" p={5}>
          <VStack align="start" spacing={4}>
            {teacherSections.map((section, index) => (
              <Button key={index} width="full" bg="blue.600" color="white">
                {section}
              </Button>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default TeacherDashboard;
