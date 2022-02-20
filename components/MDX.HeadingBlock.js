import * as React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'


function HeadingBlock(props) {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const { children, heading, category } = props

  return (
    <Box mt={heading === 'h2' ? 14 : 8} mb={4} py={2} borderBottomWidth={heading === 'h2' ? 1 : 0} borderBottomColor={borderColor}>
      <Heading size={heading === 'h2' ? 'md' : 'sm'}>{children}</Heading>
    </Box>
  );
}

export default HeadingBlock
