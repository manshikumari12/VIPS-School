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
import MyClass from './MyClass'; 

const SchoolDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  const [activeSection, setActiveSection] = useState(null);
  const [myClassesData, setMyClassesData] = useState([]); 

  const sections = {
    teacher: [
      { title: 'My Classes', content: 'Content for My Classes' },
      { title: 'Student Reports', content: 'Content for Student Reports' },
      { title: 'Assignments', content: 'Content for Assignments' },
      { title: 'Exams', content: 'Content for Exams' },
      { title: 'Attendance', content: 'Content for Attendance' },
      { title: 'Resources', content: 'Content for Resources' },
      { title: 'Communication', content: 'Content for Communication' },
    ],
    student: [
      { title: 'My Classes', content: 'Content for My Classes' },
      { title: 'Attendance', content: 'Content for Attendance' },
      { title: 'Homework', content: 'Content for Homework' },
      { title: 'Exams', content: 'Content for Exams' },
      { title: 'Resources', content: 'Content for Resources' },
      { title: 'Performance Reports', content: 'Content for Performance Reports' },
    ],
    parent: [
      { title: 'Student Performance', content: 'Content for Student Performance' },
      { title: 'Homework', content: 'Content for Homework' },
      { title: 'Attendance', content: 'Content for Attendance' },
      { title: 'Communication', content: 'Content for Communication' },
      { title: 'Reports', content: 'Content for Reports' },
    ],
  };

  const fetchMyClassesData = async () => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Math 101', time: '9:00 AM - 10:00 AM' },
          { id: 2, name: 'Science 101', time: '10:00 AM - 11:00 AM' },
          { id: 3, name: 'History 101', time: '11:00 AM - 12:00 PM' },
        ]);
      }, 1000);
    });
  };

  const handleSectionClick = async (section, title, content) => {
    if (activeSection?.section === section && activeSection.title === title) {
      setActiveSection(null); 
    } else {
   
      if (title === 'My Classes') {
        const data = await fetchMyClassesData();
        setMyClassesData(data);
      }
      setActiveSection({ section, title, content }); 
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
          {/* Logo */}
          <Flex justify="center" mb={8}>
            <Image
              src="https://via.placeholder.com/150"
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

          <VStack spacing={4} align="stretch">
            <Button onClick={() => handleSectionClick('teacher', 'Teacher Dashboard')} width="full" colorScheme="blue">
              Teacher Dashboard
            </Button>
            <Collapse in={activeSection?.section === 'teacher'}>
              <Box pl={4} pb={2}>
                {sections.teacher.map((section, index) => (
                  <Button
                    key={index}
                    onClick={() => handleSectionClick('teacher', section.title, section.content)}
                    width="full"
                    variant="outline"
                    colorScheme="blue"
                    mb={2}
                  >
                    {section.title}
                  </Button>
                ))}
              </Box>
            </Collapse>

            <Button onClick={() => handleSectionClick('student', 'Student Dashboard')} width="full" colorScheme="green">
              Student Dashboard
            </Button>
            <Collapse in={activeSection?.section === 'student'}>
              <Box pl={4} pb={2}>
                {sections.student.map((section, index) => (
                  <Button
                    key={index}
                    onClick={() => handleSectionClick('student', section.title, section.content)} 
                    width="full"
                    variant="outline"
                    colorScheme="green"
                    mb={2}
                  >
                    {section.title}
                  </Button>
                ))}
              </Box>
            </Collapse>

            <Button onClick={() => handleSectionClick('parent', 'Parent Dashboard')} width="full" colorScheme="orange">
              Parent Dashboard
            </Button>
            <Collapse in={activeSection?.section === 'parent'}>
              <Box pl={4} pb={2}>
                {sections.parent.map((section, index) => (
                  <Button
                    key={index}
                    onClick={() => handleSectionClick('parent', section.title, section.content)} 
                    width="full"
                    variant="outline"
                    colorScheme="orange"
                    mb={2}
                  >
                    {section.title}
                  </Button>
                ))}
              </Box>
            </Collapse>
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
          {activeSection ? ( 
            <>
              <Text fontSize="2xl" mt={4}>{activeSection.title}</Text>
              {activeSection.title === 'My Classes' ? (
                <MyClass myClassesData={myClassesData} /> // Pass data to MyClass component
              ) : (
                <Text mt={2}>{activeSection.content}</Text>
              )}
            </>
          ) : (
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
                <Button onClick={() => handleSectionClick('teacher', 'Teacher Dashboard')} width="full" colorScheme="blue">
                  Teacher Dashboard
                </Button>
                <Collapse in={activeSection?.section === 'teacher'}>
                  <Box pl={4} pb={2}>
                    {sections.teacher.map((section, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSectionClick('teacher', section.title, section.content)} // Update active section
                        width="full"
                        variant="outline"
                        colorScheme="blue"
                        mb={2}
                      >
                        {section.title}
                      </Button>
                    ))}
                  </Box>
                </Collapse>

                <Button onClick={() => handleSectionClick('student', 'Student Dashboard')} width="full" colorScheme="green">
                  Student Dashboard
                </Button>
                <Collapse in={activeSection?.section === 'student'}>
                  <Box pl={4} pb={2}>
                    {sections.student.map((section, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSectionClick('student', section.title, section.content)} // Update active section
                        width="full"
                        variant="outline"
                        colorScheme="green"
                        mb={2}
                      >
                        {section.title}
                      </Button>
                    ))}
                  </Box>
                </Collapse>

                <Button onClick={() => handleSectionClick('parent', 'Parent Dashboard')} width="full" colorScheme="orange">
                  Parent Dashboard
                </Button>
                <Collapse in={activeSection?.section === 'parent'}>
                  <Box pl={4} pb={2}>
                    {sections.parent.map((section, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSectionClick('parent', section.title, section.content)}
                        width="full"
                        variant="outline"
                        colorScheme="orange"
                        mb={2}
                      >
                        {section.title}
                      </Button>
                    ))}
                  </Box>
                </Collapse>
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
