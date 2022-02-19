import React from 'react'

import classnames from 'classnames'

import Select from './Select'
import { Flex } from '@chakra-ui/react'

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

  return (
    <Flex>
      <label
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
      </label>
      <Select
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
      </Select>

    </Flex>
  )
}

export default LabelSelect
