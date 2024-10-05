import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useToast,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const StudentDashboard = () => {
  const toast = useToast();
  const token = sessionStorage.getItem('token');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [studentsData, setStudentsData] = useState([]);

  // Fetch User Details
  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:1111/user/details', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const data = await response.json();
      console.log('Fetched User Details:', data);
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      toast({
        title: "Error fetching user details.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [token, toast]);

  // Fetch Student Data by Email
  const fetchStudentDataByEmail = useCallback(async (email) => {
    try {
      const response = await fetch(`http://localhost:1111/teacher/studentdata?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }

      const data = await response.json();
      setStudentsData(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
      toast({
        title: "Error fetching student data.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [token, toast]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  useEffect(() => {
    if (userDetails.email) {
      fetchStudentDataByEmail(userDetails.email);
    }
  }, [userDetails, fetchStudentDataByEmail]);

  // Function to download the student data as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Student List for ${userDetails.name}`, 20, 10);

    const tableColumn = ['Enrollment Number', 'Class', 'Phone Number', 'Gender', 'Date of Birth', 'Address'];
    const tableRows = [];

    studentsData.forEach(student => {
      const studentData = [
        student.enrollmentNumber,
        student.class,
        student.phoneNumber,
        student.gender,
        new Date(student.dateOfBirth).toLocaleDateString(),
        `${student.address.street}, ${student.address.city}, ${student.address.state}, ${student.address.zipCode}`,
      ];
      tableRows.push(studentData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('student_list.pdf');
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Welcome, {userDetails.name} ({userDetails.email})
      </Text>

      {userDetails.role === 'student' ? (
        <Box>
          <Button onClick={onOpen} colorScheme="teal" mb={4}>
            Open Drawer
          </Button>
          <Button onClick={downloadPDF} colorScheme="blue" mb={4} ml={4}>
            Download PDF
          </Button>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Student Resources</DrawerHeader>

              <DrawerBody>
                <VStack align="start" spacing={4}>
                  <Button colorScheme="teal" width="100%" onClick={() => alert('Test/Exam Section')}>
                    Test/Exam
                  </Button>
                  <Button colorScheme="teal" width="100%" onClick={() => alert('Notice Section')}>
                    Notice
                  </Button>
                  <Button colorScheme="teal" width="100%" onClick={() => alert('Timetable Section')}>
                    Timetable
                  </Button>
                  <Button colorScheme="teal" width="100%" onClick={() => alert('Material Section')}>
                    Material
                  </Button>
                  <Button colorScheme="teal" width="100%" onClick={() => alert('Marks Section')}>
                    Marks
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          {studentsData.length > 0 ? (
            <Table variant="simple" bg="yellow.100">
              <Thead>
                <Tr>
                  <Th>Enrollment Number</Th>
                  <Th>Class</Th>
                  <Th>PhoneNumber</Th>
                  <Th>Gender</Th>
                  <Th>Date of Birth</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                {studentsData.map((student) => (
                  <Tr key={student._id}>
                    <Td>{student.enrollmentNumber}</Td>
                    <Td>{student.class}</Td>
                    <Td>{student.phoneNumber}</Td>
                    <Td>{student.gender}</Td>
                    <Td>{new Date(student.dateOfBirth).toLocaleDateString()}</Td>
                    <Td>
                      {`${student.address.street}, ${student.address.city}, ${student.address.state}, ${student.address.zipCode}`}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ) : (
            <Text>No students available.</Text>
          )}
        </Box>
      ) : (
        <Text>You are not authorized to view this content.</Text>
      )}
    </Box>
  );
};

export default StudentDashboard;
