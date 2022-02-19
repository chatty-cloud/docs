import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function HeadingBlock(props) {
  const { title, subtitle, banner } = props
  const subTitleColor = useColorModeValue('gray.700', 'gray.300');
  return (
    <Box mb={4}>
      <Heading size={'lg'}>{title}</Heading>
      {subtitle && <Text color={subTitleColor}>{subtitle}</Text>}
      {banner && <img src={banner} alt={title} />}
    </Box>
  )
}
