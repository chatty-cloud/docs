import React from 'react'

import Link from 'next/link'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

export default function NextBlock(props) {
  const { steps } = props
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box borderRadius={'lg'} p={3} bgColor={bgColor} my={2}>
      <Heading size='sm'>Next steps</Heading>
      <ul className='list-disc list-inside'>
        {steps.map((step) => {
          return (
            <li className='py-sm' key={step.link}>
              <Link href={step.link}>
                <a className='font-medium'>{step.text}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Box>
  )
}
