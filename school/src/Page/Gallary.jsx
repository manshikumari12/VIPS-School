import React from 'react';
import { Box, Image, Grid } from "@chakra-ui/react";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";
import image6 from "../Assets/image6.jpg";
import image7 from "../Assets/image7.jpg";
import image8 from "../Assets/image8.jpg";
import image9 from "../Assets/image9.jpg";
import image10 from "../Assets/image10.jpg";
import image11 from "../Assets/image11.jpg";
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';

function Gallery() {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11
  ];

  return (
    <>
    <Nav/>
<Box p={4}>
      <Grid 
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} 
        gap={6}
      >
        {images.map((img, index) => (
          <Box key={index} overflow="hidden" borderRadius="md">
            <Image 
              src={img} 
              alt={`Gallery Image ${index + 1}`} 
              objectFit="cover" 
              width="100%" 
              height="250px" 
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }} 
            />
          </Box>
        ))}
      </Grid>
    </Box>
    <Footer/>

    </>
    
  );
}

export default Gallery;
