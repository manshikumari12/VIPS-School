import React from 'react';
import { Box, Flex, VStack, Button, Image, Avatar, Text, Menu, MenuButton, MenuList, MenuItem, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SchoolNavbar from '../Component/SchoolNavbar';

const SchoolDashboard = () => {
  const { isOpen: isTeacherOpen, onToggle: onToggleTeacher } = useDisclosure();
  const { isOpen: isStudentOpen, onToggle: onToggleStudent } = useDisclosure();
  const { isOpen: isParentOpen, onToggle: onToggleParent } = useDisclosure();

  const teacherSections = ['My Classes', 'Student Reports', 'Assignments', 'Exams', 'Attendance', 'Resources', 'Communication'];
  const studentSections = ['My Classes', 'Attendance', 'Homework', 'Exams', 'Resources', 'Performance Reports'];
  const parentSections = ['Student Performance', 'Homework', 'Attendance', 'Communication', 'Reports'];

  return (
    <>
      <SchoolNavbar />
      <Flex minH="100vh">
        {/* Left Sidebar */}
        <Box width="30%" bg="gray.100" p={5} borderRight="1px solid gray">
          {/* Logo */}
          <Flex justify="center" mb={8}>
            <Image
              src="https://via.placeholder.com/150" // Replace with your school logo
              alt="School Logo"
              boxSize="150px"
              objectFit="cover"
            />
          </Flex>

          {/* Profile View */}
          <Flex justify="center" align="center" flexDirection="column" mb={8}>
            <Avatar name="John Doe" size="xl" mb={4} />
            <Text fontWeight="bold" fontSize="lg">John Doe</Text>
            <Text fontSize="sm" color="gray.600">Admin</Text>
          </Flex>

          {/* Navigation Buttons */}
          <VStack spacing={4} align="stretch">
            {/* Teacher Dashboard Dropdown */}
            <Menu>
              <MenuButton as={Button} width="full" colorScheme="blue">
                Teacher Dashboard
              </MenuButton>
              <MenuList>
                {teacherSections.map((section, index) => (
                  <MenuItem key={index}>
                    {section}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* Gap for Teacher Dropdown */}
            <Box height="10px" />

            {/* Student Dashboard Dropdown */}
            <Menu>
              <MenuButton as={Button} width="full" colorScheme="green">
                Student Dashboard
              </MenuButton>
              <MenuList>
                {studentSections.map((section, index) => (
                  <MenuItem key={index}>
                    {section}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* Gap for Student Dropdown */}
            <Box height="10px" />

            {/* Parent Dashboard Dropdown */}
            <Menu>
              <MenuButton as={Button} width="full" colorScheme="orange">
                Parent Dashboard
              </MenuButton>
              <MenuList>
                {parentSections.map((section, index) => (
                  <MenuItem key={index}>
                    {section}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </VStack>
        </Box>

        {/* Right Side */}
        <Box flex="1" bg="white" p={8}>
          <Text fontSize="3xl" fontWeight="bold">Welcome to the School Dashboard</Text>
          <Text fontSize="lg" mt={4}>Select an option from the left to navigate to the specific dashboard.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default SchoolDashboard;
