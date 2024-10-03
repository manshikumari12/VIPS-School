import React, { useState, useEffect } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const TeacherDashboard = () => {
  const [teachersData, setTeachersData] = useState([]);
  const [userDetails, setUserDetails] = useState(null); 
  const [isTeacher, setIsTeacher] = useState(false); 


  const fetchUserDetails = async () => {
    const token = sessionStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:1111/user/details', {
        method: 'GET',
        headers: {
          'Authorization': token, 
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const data = await response.json();
      setUserDetails(data);
      setIsTeacher(data.role === 'teacher'); 
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };


  const fetchTeachersData = async () => {
    const token = sessionStorage.getItem('token'); 

    try {
      const response = await fetch('http://localhost:1111/teacher/all', {
        method: 'GET',
        headers: {
          'Authorization': token, 
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch teachers');
      }

      const data = await response.json();
      setTeachersData(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };


  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    if (isTeacher) {
      fetchTeachersData(); 
    }
  }, [isTeacher]);

  return (
    <Box>
      {userDetails && (
        <Box mb={4}>
          <Text fontSize="xl" fontWeight="bold">User Details:</Text>
          <Text>Name: {userDetails.name}</Text>
          <Text>Email: {userDetails.email}</Text>
          <Text>Role: {userDetails.role}</Text>
        </Box>
      )}

      {isTeacher && (
        <Box>
          <Text fontSize="2xl" mb={4}>List of Teachers:</Text>
          <VStack spacing={2}>
            {teachersData.map((teacher) => (
              <Box key={teacher.id} p={4} borderWidth="1px" borderRadius="md">
                <Text fontWeight="bold">{teacher.name}</Text>
                <Text>Subjects: {teacher.subjects.join(', ')}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      )}

      {!isTeacher && userDetails && (
        <Text>You do not have access to the teacher dashboard.</Text>
      )}
    </Box>
  );
};

export default TeacherDashboard;
