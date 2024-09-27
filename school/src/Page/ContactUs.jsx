import React from 'react';
import {
  Box, Flex, Heading, Text, Link, Icon
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import GetInTouchForm from '../Component/GetInTouchForm';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';


function ContactUs() {
  return (
    <>
    <Nav/>
      <Box p={10} bg="gray.100" minH="100%">
        <Heading mb={8} textAlign="center" color="teal.600">
          Contact Us
        </Heading>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems="start"
          justifyContent="space-between"
          gap={8}
        >

          <Box flex="1"  p={6} borderRadius="md" >
            {/* <Heading size="lg" color="teal.600" mb={4}>Our School</Heading> */}

            <Box mb={6}>
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119641.9666201358!2d87.2110854!3d24.8186122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0f599cffa691d%3A0x303525ea7eb6c23a!2sVIP%20School%2C%20Nahar%20Chowk%2C%20Godda!5e0!3m2!1sen!2sin!4v1695702338737!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>

            <Box mb={4}>
              <Heading size="md" color="teal.500">Address</Heading>
              <Text>Nahar Chowk Rd, Shivaji Nagar, Fasia Dangal, Godda, Jharkhand 814133</Text>
            </Box>

            <Box mb={4}>
              <Heading size="md" color="teal.500">Email</Heading>
              <Link href="mailto:info@vipschool.com" color="teal.400">
                <Icon as={EmailIcon} mr={2} /> info@vipschool.com
              </Link>
            </Box>

            <Box>
              <Heading size="md" color="teal.500">Phone</Heading>
              <Link href="tel:+91-9771495106" color="teal.400">
                <Icon as={PhoneIcon} mr={2} /> +91 98765 43210
              </Link>
            </Box>
          </Box>

          {/* Right side - GetInTouchForm Component */}
  <GetInTouchForm/>
          
        </Flex>
      </Box>
      <Footer/>
    </>
  );
}

export default ContactUs;
