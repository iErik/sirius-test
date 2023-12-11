import { styled } from '@stitched'

import BaseSelect from 'react-select'
import type { Props, ActionMeta } from 'react-select'

// -> Types
// --------

type OptionType = {
  value: string
  label: string
}

// -> Elements
// -----------

const SelectEl = styled(BaseSelect, {
  width: '100%',
  maxWidth: 300,

  '& > div': {
    backgroundColor: '$bgLight',
    borderColor: '$bgLighter'
  },

  '& [class*="singleValue"]': {
    color: '$fg80',
    fontWeight: '$medium'
  },

  '& [role="option"]': {
    '&:hover': { backgroundColor: '#00D091' }
  },

  '& [class*="indicatorSeparator"]': {
    backgroundColor: '$bgLighter'
  },

  '& [class*="Svg"]': {
    fill: '$bgLighter',
    stoke: '$bgLighter',
  }
})

const Select = ({ onChange, ...props }: Props) => {
  const handleChange = (
    option: OptionType,
    meta: ActionMeta<any>
  ) => { if (onChange) onChange(option as OptionType, meta) }

  return (
    <SelectEl
      {...props}
      onChange={(opt, meta) => handleChange(opt as OptionType, meta)}
      styles={{
        option: (styles) => ({
          ...styles,
          backgroundColor: 'transparent'
        })
      }}
    />
  )
}

export default Select