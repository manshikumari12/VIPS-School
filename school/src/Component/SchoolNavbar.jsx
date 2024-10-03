import React from 'react';
import { Box, Flex, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const SchoolNavbar = ({ role }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="teal.500" px={4} py={3}>
      <Flex justifyContent="space-between" alignItems="center">

        <Text color="white" fontSize="xl" fontWeight="bold">
          School Dashboard
        </Text>

        <Text color="white" fontSize="md" fontWeight="medium">
          {role ? `Role: ${role}` : ''} {/* Display the role */}
        </Text>

   
   
      </Flex>
    </Box>
  );
};

export default SchoolNavbar;
