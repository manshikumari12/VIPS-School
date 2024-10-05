import React, { useEffect, useState } from 'react';
import {
  Box,
  Avatar,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Profile = () => {
  const [user, setUser] = useState({});

  // Fetch user details from the backend
  const fetchUserDetails = async () => {
    const token = sessionStorage.getItem('token'); // Get the token from session storage

    if (!token) {
      console.error("No token found, user is not authenticated.");
      return;
    }

    try {
      const response = await fetch('http://localhost:1111/user/details', {
        method: 'GET',
        headers: {
          'Authorization': token, // Include the token for authentication
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userDetails = await response.json();
      setUser(userDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Call the fetch function when the component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    // Clear session storage and perform logout logic
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token'); // Make sure to remove the token
    console.log('User logged out');
  };

  return (
    <Menu>
      <MenuButton>
        <Flex alignItems="center">
          <Avatar name={user.name} size="sm" mr={2} />
          <Text color="white">{user.name}</Text>
          <ChevronDownIcon color="white" />
        </Flex>
      </MenuButton>
      <MenuList>
        <Box p={4}>
          <Text fontWeight="bold">{user.name}</Text>
          <Text color="gray.500">{user.role}</Text>
          <Text color="gray.500">{user.email}</Text> {/* Display user email */}
        </Box>
        <MenuDivider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Profile;
