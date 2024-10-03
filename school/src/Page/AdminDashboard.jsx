import React, { useState } from 'react';
import { Box, Flex, VStack, Button, Text } from '@chakra-ui/react';
import SchoolDashboard from './SchoolDashboard';

const AdminDashboard = () => {
  // State to hold the selected section
  const [selectedSection, setSelectedSection] = useState('');

  // Admin sections array
  const adminSections = [
    'Manage Teachers',
    'Manage Students',
    'Manage Parents',
    'School Settings',
    'Reports',
    'Attendance',
    'Exams',
    'Human Resources',
  ];

  // Function to handle the section selection
  const handleSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box>
      {/* Pass the role to SchoolDashboard */}
      <SchoolDashboard role="Admin" />

      <Flex h="100vh" direction={{ base: 'column', md: 'row' }} mt={5}>
        {/* Left Side - Selection List */}
        <Box width="30%" bg="gray.100" p={5} borderRight="1px solid gray">
          <VStack align="start" spacing={4}>
            {adminSections.map((section, index) => (
              <Button
                key={index}
                width="full"
                colorScheme={selectedSection === section ? 'teal' : 'gray'}
                onClick={() => handleSelect(section)}
              >
                {section}
              </Button>
            ))}
          </VStack>
        </Box>

        {/* Right Side - Display Selected Section */}
        <Box flex="2" p={5}>
          {selectedSection ? (
            <Text fontSize="2xl" fontWeight="bold">
              {selectedSection}
            </Text>
          ) : (
            <Text fontSize="2xl" fontWeight="bold">
              Select a section from the Admin Dashboard
            </Text>
          )}

          {/* You can dynamically load content here based on the selectedSection */}
          {selectedSection && (
            <Text mt={4} fontSize="lg">
              You have selected: {selectedSection}. Here you can manage {selectedSection.toLowerCase()}.
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
