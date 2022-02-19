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
  const borderColor = useColorModeValue('gray.400', 'gray.600')
  const buttonBgColor = useColorModeValue('gray.80', 'gray.50')

  function toggleMobileNav() {
    setShowMobileNav((s) => !s)
  }

  useEffect(() => {
    if (typeof Cookies.get('signed_in') !== 'undefined') {
      setSignedInState(true)
    }
  }, [])

  return (
    <>
      <Box zIndex={40} w={'full'} py={4} mx={'auto'} borderBottomWidth={1} borderBottomColor={borderColor}>

        <header className='relative z-50 grid items-center grid-cols-2 px-4 mx-auto md:grid-cols-3 md:grid-rows-1 max-w-7xl '>
          <div className='flex items-center col-start-1 row-start-1'>
            <Link href='https://chatty-cloud.com'>
              <a className='rounded text-primary' aria-label='Go to documentation homepage'>
                {/* <Logo /> */}
                <Logo size={'xs'} color={useColorModeValue('#111111', '#EFEFEF')} />
              </a>
            </Link>
          </div>

          {/* <Flex flexDirection={'row'} flex={1} pt={2}>
            <SearchBar />
          </Flex> */}
          <div
            className={classNames(
              'col-start-1 col-span-2 md:col-span-1 pt-3 md:pt-0 row-start-3 md:col-start-2 md:row-start-1 md:flex',
              {
                hidden: !showMobileNav
              }
            )}
          >
            <SearchBar />
          </div>

          <div
            className={classNames(
              'col-start-1 col-span-2 md:col-span-1 row-start-2 pt-5 md:pt-0 md:row-start-1 md:col-start-3 md:justify-end md:flex',
              {
                hidden: !showMobileNav
              }
            )}
          >
            <Button
              colorScheme="blue"
              bgColor={buttonBgColor}
              // variant="outline"
              size='sm'
              onClick={() => window.open('http://dashboard.chatty-cloud.com')}
            >
              dashboard
            </Button>
          </div>

          <div className='relative z-50 flex justify-end col-start-2 row-start-1 align-center md:hidden'>
            <button
              aria-label='Open navigation menu'
              className='flex appearance-none focus:outline-none'
              onClick={toggleMobileNav}
            >
              {!showMobileNav ? <HamburgerIcon w={6} h={6} /> : <CloseIcon w={4} h={4} />}

              {/* <HamburgerMenu open={showMobileNav} /> */}
            </button>
          </div>
        </header>
        <Box zIndex={40} w={'full'} px={8} pt={3} display={{ base: showMobileNav ? 'block' : 'none', md: 'none' }}>
          <Navigation />
        </Box>
      </Box >
    </>
  )
}
