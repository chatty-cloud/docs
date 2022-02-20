import * as React from 'react'
import { Box, Heading, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'


function AnchorLink(props) {
  const textColor = useColorModeValue('blue.600', 'blue.400');

  const { children, heading, category } = props

  console.log('link nuno', children)
  return (
    <LinkBox
      // as={'span'}
      fontSize='sm'
      fontWeight={'bold'}
      bgColor={'blue.100'}
    >
      {Object.prototype.toString.call(children) === '[object Array]' ? children.map((item, index) => {
        return (
          <Link href={'/'} passHref key={index}>
            <LinkOverlay>
              <Box borderRadius={'md'} p={2} bgColor={'blue.100'}>
                <Text
                  fontSize={'sm'}
                  color={textColor}
                >
                  {item}
                  {/* {item.props.children} */}
                </Text>
              </Box>
            </LinkOverlay>
          </Link>
        )
      }) : (
        <Link href={'/'} passHref>
          <LinkOverlay>
            <Box borderRadius={'md'} p={2} bgColor={'blue.100'}>
              <Text
                fontSize={'sm'}
                color={textColor}
              >
                {/* {children} */}
                {children}
              </Text>
            </Box>
          </LinkOverlay>
        </Link>
      )}
    </LinkBox>
  );
}

export default AnchorLink
