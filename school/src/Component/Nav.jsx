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


  const toggleDrawer = () => setIsOpen(!isOpen);


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
        position="relative"
        zIndex={2}
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
                    position="absolute" 
                    zIndex={3} 
                    mt={1} 
                  >
                   
                    <MenuItem>
                      <Link href='/schooltiming' style={{ textDecoration: 'none', color: 'inherit' }}>
                        School Timing
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/schooluniform' style={{ textDecoration: 'none', color: 'inherit' }}>
                        School Uniform
                      </Link>
                    </MenuItem>
                 
                    <MenuItem>
                      <Link href='/schoolguidelines' style={{ textDecoration: 'none', color: 'inherit' }}>
                        School Guidelines
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Button>
                  <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Signup/Login
                  </Link>
                </Button>

                <Button>
                  <Link href='/Gallary' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Gallery
                  </Link>
                </Button>
                {/* dashbord of Student teacher and parents */}

                <Menu>
                  <MenuButton as={Button} colorScheme='teal'>
                 Dashobord
                  </MenuButton>
                  <MenuList
                    position="absolute" 
                    zIndex={3} 
                    mt={1} 
                  >
                   
                    <MenuItem>
                      <Link href='/schooldashbord' style={{ textDecoration: 'none', color: 'inherit' }}>
                      Dashobord
                      </Link>
                    </MenuItem>
                 
                 
                 
                  </MenuList>
                </Menu>

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
          <Link href='/contactus' style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact Us
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
    width="full" 
    borderRadius="0" 
    px={0}
  >
    <MenuItem width="full" padding={0}>
      <Link 
        href='/schooltiming' 
        style={{ 
          textDecoration: 'none', 
          color: 'inherit', 
          display: 'block', 
          width: '100%', 
          padding: '12px 19px'
        }}
      >
        School Timing
      </Link>
    </MenuItem>

    <MenuItem width="full" padding={0}>
      <Link 
        href='/schooluniform' 
        style={{ 
          textDecoration: 'none', 
          color: 'inherit', 
          display: 'block', 
          width: '100%', 
          padding: '12px 19px'
        }}
      >
        School Uniform
      </Link>
    </MenuItem>

    <MenuItem width="full" padding={0}> 
      <Link 
        href='/schoolguidelines' 
        style={{ 
          textDecoration: 'none', 
          color: 'inherit', 
          display: 'block', 
          width: '100%', 
          padding: '12px 19px'
        }}
      >
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
