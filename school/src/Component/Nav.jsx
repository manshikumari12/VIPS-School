import React, { useState } from 'react';
import {
  Flex,
  Stack,
  HStack,
  Heading,
  Button,
  Link,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open/close the drawer on small screens
  const toggleDrawer = () => setIsOpen(!isOpen);

  // Responsive check: show hamburger menu on small screens, full nav on larger screens
  const displayNav = useBreakpointValue({ base: 'drawer', md: 'full' });

  return (
    <>
      <Flex
        minHeight={'10vh'}
        border={'1px solid'}
        bg={useColorModeValue('teal.600')}
        px={6}
        justify={'center'}
        align={'center'}
      >
        <Stack display={'flex'} justify={'center'} align={'center'} width={'full'}>
          <HStack spacing={12} width={'full'} justify={'space-between'}>
            <Heading color={'whitesmoke'}>VIPS</Heading>

            {displayNav === 'full' ? (
              <HStack>
                <Button>
                  <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Home
                  </Link>
                </Button>

                <Button>
                  <Link href='/AboutUS' style={{ textDecoration: 'none', color: 'inherit' }}>
                    About
                  </Link>
                </Button>

                <Button>
                  <Link href='/admission' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Admission
                  </Link>
                </Button>

                <Button>
                  <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Signup/Login
                  </Link>
                </Button>

                <Button>
                  <Link href='/Gallary' style={{ textDecoration: 'none', color: 'inherit' }}>
                 Gallary
                  </Link>
                </Button>
              </HStack>
            ) : (
              <IconButton
                icon={<HamburgerIcon />}
                aria-label='Open Menu'
                colorScheme='whiteAlpha'
                onClick={toggleDrawer}
              />
            )}
          </HStack>
        </Stack>
      </Flex>

      {/* Drawer for mobile menu */}
      <Drawer isOpen={isOpen} placement='right' onClose={toggleDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack align='start' spacing={4}>
              <Button width="full" onClick={toggleDrawer}>
                <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                  Home
                </Link>
              </Button>

              <Button width="full" onClick={toggleDrawer}>
                <Link href='/AboutUs' style={{ textDecoration: 'none', color: 'inherit' }}>
                  About
                </Link>
              </Button>

              <Button width="full" onClick={toggleDrawer}>
                <Link href='/admission' style={{ textDecoration: 'none', color: 'inherit' }}>
                  Admission
                </Link>
              </Button>

              <Button width="full" onClick={toggleDrawer}>
                <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                  Signup/Login
                </Link>
              </Button>

              <Button width="full" onClick={toggleDrawer}>
                <Link href='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                  Your Profile
                </Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Nav;
