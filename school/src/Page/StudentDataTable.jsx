import React, { useEffect, useState } from 'react';

const StudentDataTable = ({ userEmail }) => {
  const [studentsData, setStudentsData] = useState([]);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:1111/teacher/studentdata?email=${userEmail}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, // Include the token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }

        const data = await response.json();
        setStudentsData(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [userEmail, token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Render your student data here */}
      <h2>Student Data</h2>
      <ul>
        {studentsData.map(student => (
          <li key={student._id}>{student.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </div>
  );
};

export default StudentDataTable;
