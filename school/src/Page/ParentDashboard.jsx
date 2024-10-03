import React from 'react';
import { Box, Flex, VStack, Button, useDisclosure } from '@chakra-ui/react';
import SchoolNavbar from '../Component/SchoolNavbar';


const ParentDashboard = () => {
  const { isOpen, onToggle } = useDisclosure();

  const parentSections = [
    'Student Performance',
    'Homework',
    'Attendance',
    'Communication',
    'Reports',
  ];

  return (
    <Box>
        <SchoolNavbar  role="Parent"/>
   
      <Flex h="100vh" direction={{ base: 'column', md: 'row' }} mt={5}>
        <Box flex="1" display={{ base: 'none', md: 'block' }} />

        <Box flex="2" p={5}>
          <VStack align="start" spacing={4}>
            {parentSections.map((section, index) => (
              <Button key={index} width="full" bg="orange.600" color="white">
                {section}
              </Button>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ParentDashboard;
