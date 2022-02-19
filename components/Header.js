import React, { useEffect, useState } from 'react'

import classNames from 'classnames'
import Cookies from 'js-cookie'
import Link from 'next/link'

import Logo from './Logo'
import Navigation from './Navigation'
import SearchBar from './Searchbar'
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
  const [isSignedIn, setSignedInState] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const bgColor = useColorModeValue('gray.300', 'gray.800');
  const borderColor = useColorModeValue('gray.400', 'gray.600');
  const buttonBgColor = useColorModeValue('gray.80', 'gray.50');

  function toggleMobileNav() {
    setShowMobileNav((s) => !s)
  }

  useEffect(() => {
    if (typeof Cookies.get('signed_in') !== 'undefined') {
      setSignedInState(true)
    }
  }, [])

  return (
    <Box
      sx={{ position: 'sticky', top: '0' }}
      zIndex={40}
      w={'full'}
      py={4}
      mx={'auto'}
      borderBottomWidth={1}
      borderBottomColor={borderColor}
      bg={bgColor}
    >

      <Flex flex={1} maxW={'7xl'} mx={'auto'} alignItems={'center'} justifyContent={'space-between'} px={6}>
        <Box>
          <Link href='https://chatty-cloud.com'>
            <a className='rounded text-primary' aria-label='Go to documentation homepage'>
              {/* <Logo /> */}
              <Logo size={'xs'} color={useColorModeValue('#111111', '#EFEFEF')} />
            </a>
          </Link>
        </Box>

        <Box display={{ base: 'none', md: 'block' }}>
          <SearchBar />
        </Box>


        <Box display={{ base: 'none', md: 'block' }}>
          <Button
            colorScheme="blue"
            bgColor={buttonBgColor}
            // variant="outline"
            size='sm'
            onClick={() => window.open('http://dashboard.chatty-cloud.com')}
          >
            dashboard
          </Button>
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>

          <button
            aria-label='Open navigation menu'
            onClick={toggleMobileNav}
          >
            {!showMobileNav ? <HamburgerIcon w={6} h={6} /> : <CloseIcon w={4} h={4} />}

            {/* <HamburgerMenu open={showMobileNav} /> */}
          </button>
        </Box>
      </Flex>
      <Box zIndex={40} w={'full'} px={8} pt={3} display={{ base: showMobileNav ? 'block' : 'none', md: 'none' }}>
        <Navigation />
      </Box>
    </Box >
  )
}
