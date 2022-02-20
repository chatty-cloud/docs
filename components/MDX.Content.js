// libs
import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

import FeedbackBlock from './FeedbackBlock'
import TitleBlock from './TitleBlock'
import HeadingBlock from './MDX.HeadingBlock'
import CodeBlock from './MDX.CodeBlock'
import ImageBlock from './MDX.ImageBlock'
import InfoBlock from './MDX.InfoBlock'
import InlineCodeBlock from './MDX.InlineCodeBlock'
import NextBlock from './MDX.NextBlock'
import TableBlock from './MDX.TableBlock'
import ListBlock from './MDX.ListBlock'
import PageInfo from './PageInfo'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import AnchorLink from './MDX.AnchorLink'
import Link from 'next/link'

export default function MDXContent({ title, subtitle, banner, body, lastUpdatedOn, slug, category }) {
  const pColor = useColorModeValue('gray.700', 'gray.200');
  const components = {
    table: TableBlock,
    code: CodeBlock,
    inlineCode: InlineCodeBlock,
    img: ImageBlock,
    h2: (props) => <HeadingBlock {...props} heading='h2' category={category} />,
    h3: (props) => <HeadingBlock {...props} heading='h3' category={category} />,
    ul: (props) => <ListBlock {...props} />,
    // link: (props) => <Text>sdf</Text>,
    // a: (props) => <Box as={'span'}><Text fontWeight={'bold'} fontSize={'sm'}>{props.children}</Text></Box>,
    // a: (props) => <Link href={'/'}>{props.children}</Link>,
    // a: (props) => <AnchorLink {...props} />,
    // p: (props) => <Text color={pColor} lineHeight={1.6} fontSize={'md'}>{props.children}</Text>,
    NextBlock,
    InfoBlock
  }

  return (
    <Box>
      <TitleBlock title={title} subtitle={subtitle} banner={banner} />
      <MDXRemote {...body} components={components} lazy />
      <FeedbackBlock />
      <PageInfo lastUpdatedOn={lastUpdatedOn} slug={slug}></PageInfo>
    </Box>
  )
}
