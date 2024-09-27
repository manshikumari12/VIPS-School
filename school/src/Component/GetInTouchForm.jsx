
// import React, { useState } from 'react';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   Select,
//   Box,
//   Heading,
// } from '@chakra-ui/react';

// function GetInTouchForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // You can handle the submission logic here, like sending it to an API or email.
//     // Reset form if necessary
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       address: '',
//       city: '',
//       state: '',
//       message: '',
//     });
//   };

//   return (
//     <Box bg="white" p={6} borderRadius="md" boxShadow="md "
//     width={"50%"}>
//       <Heading size="lg" color="teal.600" mb={4}>Get in Touch</Heading>

//       <form onSubmit={handleSubmit}>
//         <FormControl mb={4} isRequired>
//           <FormLabel>Full Name</FormLabel>
//           <Input 
//             type="text" 
//             name="fullName" 
//             placeholder="Your name" 
//             value={formData.fullName}
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>Email Address</FormLabel>
//           <Input 
//             type="email" 
//             name="email" 
//             placeholder="Your email" 
//             value={formData.email}
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>Phone Number</FormLabel>
//           <Input 
//             type="tel" 
//             name="phone" 
//             placeholder="Your phone number" 
//             value={formData.phone}
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>Address</FormLabel>
//           <Input 
//             type="text" 
//             name="address" 
//             placeholder="Your address" 
//             value={formData.address}
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>City</FormLabel>
//           <Input 
//             type="text" 
//             name="city" 
//             placeholder="e.g. Ramgarh" 
//             value={formData.city}
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>State</FormLabel>
//           <Select 
//             name="state" 
//             placeholder="Please select" 
//             value={formData.state}
//             onChange={handleChange}
//           >
//             <option value="Jharkhand">Jharkhand</option>
//             <option value="Bihar">Bihar</option>
//             <option value="West Bengal">West Bengal</option>
//             {/* Add more states as needed */}
//           </Select>
//         </FormControl>

//         <FormControl mb={4} isRequired>
//           <FormLabel>Message</FormLabel>
//           <Textarea 
//             name="message" 
//             placeholder="Your message" 
//             rows={6} 
//             value={formData.message}
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <Button colorScheme="teal" width="full" type="submit">
//           Send Message
//         </Button>
//       </form>
//     </Box>
//   );
// }

// export default GetInTouchForm;




import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Box,
  Heading,
  useToast,
} from '@chakra-ui/react';

function GetInTouchForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); // To manage loading state
  const toast = useToast(); // Chakra UI toast for notifications

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true); // Set loading to true when form is submitted

    try {
      const response = await fetch('http://localhost:1111/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        toast({
          title: 'Success!',
          description: 'Your message has been submitted successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        // Reset the form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit the form');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit your message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Stop loading after submission is done
    }
  };

  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" width={"50%"}>
      <Heading size="lg" color="teal.600" mb={4}>Get in Touch</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            name="fullName"
            placeholder="Your name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Your address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            placeholder="e.g. Godda"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>State</FormLabel>
          <Select
            name="state"
            placeholder="Please select"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="Jharkhand">Jharkhand</option>
            <option value="Bihar">Bihar</option>
            <option value="West Bengal">West Bengal</option>
            {/* Add more states as needed */}
          </Select>
        </FormControl>

        <FormControl mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            placeholder="Your message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          width="full"
          type="submit"
          isLoading={isLoading} // Show loading state while submitting
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default GetInTouchForm;
