
import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Button, Link } from '@chakra-ui/react';
import image7 from "../Assets/image7.jpg"; 
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";

function Imageslide() {
  const images = [
    {
      src: image7,
      headline: "Welcome to VIPS",
      subText: "A Co-Educational International School in Godda, Jharkhand",
      buttonText: "",
      buttonLink: "",
    },
    {
      src: image2,
      headline: "Click here For Admission",
      subText: "We firmly believe that knowledge and education are instrumental in empowering young minds.",
      buttonText: "Click for Admission",
      buttonLink: "/admission",
    },
    {
      src: image3,
      headline: "Excellence in Education",
      subText: "We offer global curriculum and modern infrastructure for bright futures.",
      buttonText: "",
      buttonLink: "",
    },
    {
      src: image4,
      headline: "Innovative Learning",
      subText: "We nurture every child to help them grow and achieve their potential.",
      buttonText: "",
      buttonLink: "",
    },
    {
      src: image5,
      headline: "Join VIPS Today",
      subText: "Enroll now and give your child the best education possible.",
      buttonText: "Enroll Now",
      buttonLink: "/contactus",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setVisible(true); 
      }, 600);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [images.length]); 

  return (
    <Box position="relative" width="100%" height="400px" overflow="hidden">
    
      <Image
        src={images[currentIndex].src} 
        alt={`Slideshow Image ${currentIndex + 1}`}
        boxSize="100%"
        objectFit="cover"
        opacity={visible ? 1 : 0}
        transition="opacity 0.5s" 
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
      />

     
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%" 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="rgba(0, 0, 0, 0.6)" 
        color="white"
        textAlign="center"
        zIndex={1}
      >
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          {images[currentIndex].headline}
        </Text>
        <Text fontSize="lg" mb={4}>
          {images[currentIndex].subText}
        </Text>

        {images[currentIndex].buttonText && (
          <Button as={Link} href={images[currentIndex].buttonLink} colorScheme="teal">
            {images[currentIndex].buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Imageslide;
