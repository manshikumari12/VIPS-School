import React, { useState, useEffect } from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const TeacherDashboard = () => {
  const [teachersData, setTeachersData] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);

  // Function to fetch user details
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
      console.log('User Details:', data); 
      setUserDetails(data);
      setIsTeacher(data.role === 'teacher');

    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Function to fetch teachers data
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
      console.log('Fetched Teacher Data:', data);
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
    <Box p={4}>
      {userDetails ? (
        <>
          {isTeacher ? (
            <Box>
              <Text fontSize="2xl" mb={4}>Your Details and List of Teachers:</Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Teacher Name</Th>
                    <Th>Your Email</Th>
                    <Th>Your Role</Th>
                    <Th>Subjects</Th>
                  </Tr>
                </Thead>
                <Tbody>
                
                  <Tr>
                    <Td>{userDetails.name}</Td>
                    <Td>{userDetails.email}</Td>
                    <Td>{userDetails.role}</Td>
                    {teachersData.map((teacher) => (
                    <Tr key={teacher.id}>
                     
                      <Td>{teacher.subjects ? teacher.subjects.join(', ') : 'N/A'}</Td>
                    </Tr>
                  ))}
                  </Tr>

                  {/* Render each teacher's details in a new row */}
                 
                </Tbody>
              </Table>
            </Box>
          ) : (
            <Text>You do not have access to the teacher dashboard.</Text>
          )}
        </>
      ) : (
        <Text>Loading user details...</Text> // Loading state
      )}
    </Box>
  );
};

export default TeacherDashboard;
