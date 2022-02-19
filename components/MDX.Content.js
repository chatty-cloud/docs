// libs
import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

import FeedbackBlock from './FeedbackBlock'
import HeadingBlock from './HeadingBlock'
import AnchorLink from './MDX.AnchorLink'
import CodeBlock from './MDX.CodeBlock'
import ImageBlock from './MDX.ImageBlock'
import InfoBlock from './MDX.InfoBlock'
import InlineCodeBlock from './MDX.InlineCodeBlock'
import NextBlock from './MDX.NextBlock'
import TableBlock from './MDX.TableBlock'
import ListBlock from './MDX.ListBlock'
import PageInfo from './PageInfo'
import { Box, Text } from '@chakra-ui/react'

export default function MDXContent({ title, subtitle, banner, body, lastUpdatedOn, slug, category }) {
  const components = {
    table: TableBlock,
    code: CodeBlock,
    inlineCode: InlineCodeBlock,
    img: ImageBlock,
    h2: (props) => <AnchorLink {...props} heading='h2' category={category} />,
    h3: (props) => <AnchorLink {...props} heading='h3' category={category} />,
    ul: (props) => <ListBlock {...props} />,
    link: (props) => <Text>sdf</Text>,
    NextBlock,
    InfoBlock
  }

  return (
    <Box>
      <HeadingBlock title={title} subtitle={subtitle} banner={banner} />
      <MDXRemote {...body} components={components} lazy />
      <FeedbackBlock />
      <PageInfo lastUpdatedOn={lastUpdatedOn} slug={slug}></PageInfo>
    </Box>
  )
}
