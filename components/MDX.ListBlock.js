import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react'

export default function ListBlock(props) {
  const { children } = props

  // console.log('nuno', Object.prototype.toString.call(children) === '[object Array]');

  return (
    <UnorderedList p={2}>
      {Object.prototype.toString.call(children) === '[object Array]' ? children.map((item, index) => {
        return (

          <ListItem key={index}>{item.props.children}</ListItem>
        )
      }) : (
        <ListItem>{children.props.children}</ListItem>
      )}
    </UnorderedList>
  )
}
