import React from 'react'

import { useTheme } from 'next-themes'

import meta from '../content/docs/meta.json'
import LabelSelect from './LabelSelect'
import { Box, Heading, LinkBox, LinkOverlay, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  // const { colorMode, toggleColorMode } = useColorMode();
  const switchMode = (event) => {
    setTheme(event.target.value);
    console.log('colormode ', event.target.value);
  }

  const toc = meta

  function SidenavGroup({ categoryID, category, pages }) {
    const router = useRouter();
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    return (
      <Box my={3}>
        <Heading mb={1} size={'sm'}>{category}</Heading>
        {pages.map((page, index) => {
          const href = `/${categoryID}/${page['route']}`

          return (
            <LinkBox
              key={index}
              fontSize='sm'
              fontWeight={router.query.post === page['route'] ? 'bold' : undefined}
            >
              <Link href={href} passHref>
                <LinkOverlay>
                  <Box bgColor={router.query.post === page['route'] ? bgColor : undefined} borderRadius={'md'} p={2}>
                    <Text
                      fontSize={'sm'}
                      color={router.query.post === page['route'] ? 'gray.100' : 'gray.400'}
                    >
                      {page['display']}
                    </Text>
                  </Box>
                </LinkOverlay>
              </Link>
            </LinkBox>
          )
        })}
      </Box>
    )
  }


  return (
    <Stack spacing={6}>
      <Stack>
        <LabelSelect label='SDK' value={theme} size='small' className='block' onChange={switchMode}>
          <option value='react-native'>React Native</option>
          <option value='flutter'>Flutter</option>
        </LabelSelect>
        <LabelSelect label='Version' value={theme} size='small' className='block' onChange={switchMode}>
          <option value='1.1'>1.1</option>
          <option value='1.0'>1.0</option>
        </LabelSelect>
        <LabelSelect label='Theme' value={theme} size='small' className='block' onChange={switchMode}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='system'>System</option>
        </LabelSelect>
      </Stack>

      {toc.order.map((category, index) => {
        return (
          <SidenavGroup
            key={index}
            categoryID={category.id}
            category={category.name}
            pages={category.pages}
          ></SidenavGroup>
        )
      })}

    </Stack>
  )
}
