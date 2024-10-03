import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Button,
  Image,
  Avatar,
  Text,
  Collapse,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from '@chakra-ui/react';
import SchoolNavbar from '../Component/SchoolNavbar';
import { FaBars } from 'react-icons/fa';
import Footer from '../Component/Footer';
import TeacherDashboard from './TeacherDashboard';
// import StudentDashboard from './StudentDashboard';
// import ParentDashboard from './ParentDashboard';

const SchoolDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    teacher: 'Teacher Dashboard',
    student: 'Student Dashboard',
    parent: 'Parent Dashboard',
  };

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <>
      <SchoolNavbar />
      <Flex minH="100vh" flexDirection={{ base: "column", md: "row" }}>
        <Box
          width={{ base: "0", md: "30%" }}
          bg="gray.100"
          p={5}
          borderLeft="1px solid gray"
          display={{ base: "none", md: "block" }} 
        >
          {/* Sidebar content */}
          <Flex justify="center" mb={8}>
            <Image
              src="https://via.placeholder.com/150"
              alt="School Logo"
              boxSize="150px"
              objectFit="cover"
            />
          </Flex>
          <Flex justify="center" align="center" flexDirection="column" mb={8}>
            <Avatar name="John Doe" size="xl" mb={4} />
            <Text fontWeight="bold" fontSize="lg">John Doe</Text>
            <Text fontSize="sm" color="gray.600">Admin</Text>
          </Flex>
          <VStack spacing={4} align="stretch">
            <Button onClick={() => handleSectionClick('teacher')} width="full" colorScheme="blue">
              {sections.teacher}
            </Button>
            <Button onClick={() => handleSectionClick('student')} width="full" colorScheme="green">
              {sections.student}
            </Button>
            <Button onClick={() => handleSectionClick('parent')} width="full" colorScheme="orange">
              {sections.parent}
            </Button>
          </VStack>
        </Box>

        {/* Hamburger Menu Button for smaller screens */}
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          bg={'teal.500'}
          onClick={onOpen}
          display={{ base: "flex", md: "none" }} 
          position="absolute"
          top={2}
          right={4}
        />

        {/* Right Side for content */}
        <Box flex="1" bg="white" p={8}>
          <Text fontSize="3xl" fontWeight="bold">Welcome to the School Dashboard</Text>
        
          {activeSection === 'teacher' &&  <TeacherDashboard/>}
          {/* {activeSection === 'student' && <StudentDashboard />}
          {activeSection === 'parent' && <ParentDashboard />} */}
          {!activeSection && (
            <Text fontSize="lg" mt={4}>Select a section from the left to see the details.</Text>
          )}
        </Box>

        {/* Drawer for the Hamburger Menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Your Dashboard</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <Button onClick={() => handleSectionClick('teacher')} width="full" colorScheme="blue">
                  {sections.teacher}
                </Button>
                <Button onClick={() => handleSectionClick('student')} width="full" colorScheme="green">
                  {sections.student}
                </Button>
                <Button onClick={() => handleSectionClick('parent')} width="full" colorScheme="orange">
                  {sections.parent}
                </Button>
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Footer />
    </>
  );
};

export default SchoolDashboard;
