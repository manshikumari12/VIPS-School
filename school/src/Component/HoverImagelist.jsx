import React from 'react';
import {
  Box,
  Image,
  Grid,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

// Import your image assets
import image7 from "../Assets/image7.jpg"; 
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";

const images = [
  {
    src: image7,
    alt: 'Image 7',
    caption: 'VIPS School Building',
  },
  {
    src: image2,
    alt: 'Image 2',
    caption: 'VIPS Smart Classroom',
  },
  {
    src: image3,
    alt: 'Image 3',
    caption: 'VIPS Kids Academics',
  },
  {
    src: image4,
    alt: 'Image 4',
    caption: 'VIPS Artwork Culture',
  },
  {
    src: image5,
    alt: 'Image 5',
    caption: 'VIPS Celebration',
  },
];


function HoverImagelist() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState({});

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box p={5} display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
      <Grid
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={10}
        maxWidth="1200px"
        width="100%"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
            _hover={{
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            }}
            cursor="pointer"
            onClick={() => handleImageClick(image)}
          >
            <Image src={image.src} alt={image.alt} borderRadius="md" />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p={3}
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              textAlign="center"
              opacity="0"
              transition="opacity 0.3s ease"
              _hover={{ opacity: 1 }}
            >
              {image.caption}
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Modal for displaying the full image */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedImage.caption}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage.src} alt={selectedImage.alt} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default HoverImagelist;
