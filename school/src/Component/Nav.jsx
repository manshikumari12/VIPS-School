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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
        position="relative" // Set parent position to relative
        zIndex={2} // Ensure Nav bar is on top of other components
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


                    {/* Academic Section with Absolute Dropdown */}
                    <Menu>
                  <MenuButton as={Button} colorScheme='teal'>
                    Academic
                  </MenuButton>
                  <MenuList
                    position="absolute" // Position the dropdown absolutely
                    zIndex={3} // Ensure the dropdown is above the image slider
                    mt={1} // Space from the button
                  >
                    <MenuItem>
                      <Link href='/syllabus' style={{ textDecoration: 'none', color: 'inherit' }}>
                        Syllabus
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/school-timing' style={{ textDecoration: 'none', color: 'inherit' }}>
                        School Timing
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/school-uniform' style={{ textDecoration: 'none', color: 'inherit' }}>
                        School Uniform
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/holiday-list' style={{ textDecoration: 'none', color: 'inherit' }}>
                        Holiday List
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/school-guidelines' style={{ textDecoration: 'none', color: 'inherit' }}>
                        School Guidelines
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>

                {/* <Button>
                  <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Signup/Login
                  </Link>
                </Button> */}

                <Button>
                  <Link href='/Gallary' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Gallery
                  </Link>
                </Button>

                <Button>
                  <Link href='/contactus' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Contact Us
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

      {/* Drawer for Mobile Menu */}
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
                <Link href='/Gallary' style={{ textDecoration: 'none', color: 'inherit' }}>
                  Gallery
                </Link>
              </Button>

              {/* Academic Section with Dropdown in Drawer */}
              <Menu>
                <MenuButton as={Button} width="full" colorScheme='teal'>
                  Academic
                </MenuButton>
                <MenuList
                  position="absolute" // Position the dropdown absolutely
                  zIndex={3} // Ensure the dropdown is above the image slider
                  mt={1} // Space from the button
                >
                  <MenuItem>
                    <Link href='/syllabus' style={{ textDecoration: 'none', color: 'inherit' }}>
                      Syllabus
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/school-timing' style={{ textDecoration: 'none', color: 'inherit' }}>
                      School Timing
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/school-uniform' style={{ textDecoration: 'none', color: 'inherit' }}>
                      School Uniform
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/holiday-list' style={{ textDecoration: 'none', color: 'inherit' }}>
                      Holiday List
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/school-guidelines' style={{ textDecoration: 'none', color: 'inherit' }}>
                      School Guidelines
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Nav;
