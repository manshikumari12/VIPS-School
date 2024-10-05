import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Flex,
  Button,
  Text,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import Profile from '../Component/Profile';
import { useNavigate } from 'react-router-dom';
import StudentDataTable from './Yourstudentdashbord'; // Student Data Table component

const Dashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [userDetails, setUserDetails] = useState({});
  const [showStudentDataTable, setShowStudentDataTable] = useState(false); // For StudentDataTable visibility
  const [studentData, setStudentData] = useState([]); // State for student data
  const [teacherData, setTeacherData] = useState([]); // State for teacher data
  const [showTeacherDataTable, setShowTeacherDataTable] = useState(false); // For TeacherDataTable visibility
  const token = sessionStorage.getItem('token');

  // Fetch User Details
  const fetchUserDetails = useCallback(async () => {
    if (!token) {
      toast({
        title: "Unauthorized",
        description: "You need to log in to access this page.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
      return;
    }

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
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [token, navigate, toast]);

  // Fetch Student Data (from /teacher/data route)
  const fetchStudentData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:1111/teacher/data', {
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
      setStudentData(data); // Assuming data is an array of students
    } catch (error) {
      console.error('Error fetching student data:', error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [token, toast]);

  // Fetch Teacher Data (from /teacher/all route)
  const fetchTeacherData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:1111/teacher/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch teacher data');
      }

      const data = await response.json();
      setTeacherData(data); // Assuming data is an array of teachers
    } catch (error) {
      console.error('Error fetching teacher data:', error);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [token, toast]);

  useEffect(() => {
    fetchUserDetails();
    fetchStudentData(); // Fetch student data on mount
  }, [fetchUserDetails, fetchStudentData]);

  // Function to handle showing the student data table
  const handleShowStudentData = () => {
    if (userDetails.role === 'student') {
      setShowStudentDataTable(true); // Show StudentDataTable component
      setShowTeacherDataTable(false); // Hide teacher data
    } else {
      toast({
        title: "Access Denied",
        description: "You are not authorized to view this content.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Function to handle showing the teacher data table
  const handleShowTeacherData = () => {
    setShowTeacherDataTable(true); // Show teacher data
    setShowStudentDataTable(false); // Hide student data
    fetchTeacherData(); // Fetch teacher data when button is clicked
  };

  // Function to reset to default table
  const resetToDashboard = () => {
    setShowStudentDataTable(false); // Hide the StudentDataTable component
    setShowTeacherDataTable(false); // Hide the TeacherDataTable component
  };

  return (
    <Box>
      <Box bg="teal.500" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="xl" fontWeight="bold" onClick={resetToDashboard} cursor="pointer">
            Dashboard
          </Text>
          <Flex alignItems="center">
            <Button colorScheme="blue" onClick={handleShowStudentData} mr={2}>
              Student Dashboard
            </Button>
            <Button colorScheme="blue" onClick={handleShowTeacherData} mr={2}>
              Teacher Dashboard
            </Button>
            <Button colorScheme="green" onClick={() => navigate('/parent-dashboard')} mr={2}>
              Parent Dashboard
            </Button>
            <Profile />
          </Flex>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex justifyContent="center" p={4}>
        <Text fontSize="lg">
          Welcome to the Dashboard! Please select an option from the navbar.
        </Text>
      </Flex>

      {/* Show Student Data Table if the button is clicked */}
      {showStudentDataTable && (
        <StudentDataTable userEmail={userDetails.email} />
      )}

      {/* Display Student Data in a Table (Only show when student data table is NOT clicked) */}
      {!showStudentDataTable && !showTeacherDataTable && studentData.length > 0 && (
        <Box p={4}>
          <Text fontSize="lg" mb={4}>
            Total Students: {studentData.length} {/* Display total student count */}
          </Text>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Class</Th>
                <Th>Roll Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {studentData.map((student, index) => (
                <Tr key={index}>
                  <Td>{student.name}</Td>
                  <Td>{student.email}</Td>
                  <Td>{student.class}</Td>
                  <Td>{student.rollNumber}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}

      {/* Display Teacher Data in a Table (Only show when teacher data table is clicked) */}
      {showTeacherDataTable && teacherData.length > 0 && (
        <Box p={4}>
          <Text fontSize="lg" mb={4}>
            Total Teachers: {teacherData.length} {/* Display total teacher count */}
          </Text>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Subject</Th>
                <Th>Experience</Th>
              </Tr>
            </Thead>
            <Tbody>
              {teacherData.map((teacher, index) => (
                <Tr key={index}>
                  <Td>{teacher.name}</Td>
                  <Td>{teacher.email}</Td>
                  <Td>{teacher.subject}</Td>
                  <Td>{teacher.experience} years</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
