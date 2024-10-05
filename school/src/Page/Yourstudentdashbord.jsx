// StudentDataTable.jsx

import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  useToast,
} from '@chakra-ui/react';

const StudentDataTable = ({ userEmail }) => {
  const [studentsData, setStudentsData] = useState([]);
  const toast = useToast();
  const token = sessionStorage.getItem('token');

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
    if (userEmail) {
      fetchStudentDataByEmail(userEmail);
    }
  }, [userEmail, fetchStudentDataByEmail]);

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Student Data
      </Text>
      {studentsData.length > 0 ? (
        <Table variant="simple" bg="yellow.100">
          <Thead>
            <Tr>
              <Th>Enrollment Number</Th>
              <Th>Class</Th>
              <Th>Phone Number</Th>
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
  );
};

export default StudentDataTable;
