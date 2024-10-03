import React from 'react';
import { Box, Flex, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const SchoolNavbar = ({ role }) => {  // Add 'role' prop
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="teal.500" px={4} py={3}>
      <Flex justifyContent="space-between" alignItems="center">
        {/* School Name */}
        <Text color="white" fontSize="xl" fontWeight="bold">
          School Dashboard
        </Text>

        {/* Display Role */}
        <Text color="white" fontSize="md" fontWeight="medium">
          {role ? `Role: ${role}` : ''} {/* Display the role */}
        </Text>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          color="white"
          variant="outline"
          onClick={onToggle}
          display={{ base: 'block', md: 'none' }}
          aria-label="Open Menu"
        />
      </Flex>
    </Box>
  );
};

export default SchoolNavbar;
