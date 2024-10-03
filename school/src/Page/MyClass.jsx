
import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const MyClass = ({ myClassesData }) => {
  return (
    <VStack spacing={4} align="stretch" mt={4}>
      <Text fontSize="xl" fontWeight="bold">My Classes</Text>
      {myClassesData.map((classData) => (
        <Box key={classData.id} p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg">{classData.name}</Text>
          <Text color="gray.500">{classData.time}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default MyClass;
