import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

function Imageslide() {
    const images = [
        '',
        'https://via.placeholder.com/400x300.png?text=Image+2',
        'https://via.placeholder.com/400x300.png?text=Image+3',
        'https://via.placeholder.com/400x300.png?text=Image+4',
        'https://via.placeholder.com/400x300.png?text=Image+5',
        'https://via.placeholder.com/400x300.png?text=Image+6',
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [visible, setVisible] = useState(true);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setVisible(false);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setVisible(true); // Start blinking in
          }, 600); // Time for blinking out
        }, 5000); // Time for image change
    
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, []);
    
      return (
        <Box position="relative" width="100%" height="300px" overflow="hidden">
          <Image
            src={images[currentIndex]}
            alt={`Slideshow Image ${currentIndex + 1}`}
            boxSize="100%"
            objectFit="cover"
            opacity={visible ? 1 : 0} 
            transition="opacity 0.2s" 
          />
        </Box>
      )
}

export default Imageslide
