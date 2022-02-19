import React from 'react'

import classnames from 'classnames'

// import Select from './Select'
import { Box, Divider, Flex, Text, Select, useColorModeValue } from '@chakra-ui/react'

const LabelSelect = ({
  ariaLabel,
  children,
  onBlur,
  onChange,
  value,
  name,
  size,
  className,
  label,
  defaultValue,
  disabled,
  required
}) => {
  const small = size === 'small'
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const borderColor = useColorModeValue('gray.50', 'gray.700');
  return (
    <Flex bgColor={bgColor} borderWidth={1} borderColor={borderColor} borderRadius={'lg'} px={2}>
      <Box py={1}>
        <Text fontSize={'xs'}>{label}</Text>
      </Box>
      <Divider orientation='vertical' color={borderColor} height={'auto'} mx={2} />
      <Select defaultValue={defaultValue} size='xs' variant={'unstyled'}>
        {children}
        {/* <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option> */}
      </Select>
      {/* <label
        className={classnames(
          'flex items-center px-1.5 mb-0 font-medium border-t border-b border-l rounded-l bg-secondary border-secondary whitespace-nowrap',
          {
            'cursor-not-allowed text-secondary': disabled,
            'text-sm py-1 h-button-sm': small,
            'h-button': !small
          }
        )}
      >
        {label}
      </label> */}

      {/* <Select
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        size={size}
        disabled={disabled}
        name={name}
        ariaLabel={ariaLabel}
        required={required}
        className='block w-full pl-2 rounded-l-none text-primary rounded-r !shadow-none'
      >
        {children}
      </Select> */}

    </Flex>
  )
}

export default LabelSelect
