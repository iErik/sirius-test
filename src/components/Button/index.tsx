import { styled } from '@stitched'

// -> Types
// --------

export type ButtonProps = React.PropsWithChildren & {
  onClick?: () => any
  active?: boolean 
}

// -> Elements
// -----------

const ButtonEl = styled('button', {
  display: 'flex',
  alignItems: 'center',

  backgroundColor: '$bgLight',
  border: '1px solid $bgLighter',
  borderRadius: 6,

  height: 40,
  padding: 10,

  transition: 'background-color 300ms ease',

  '&:hover': {
    backgroundColor: '$bgLighter',
    border: '1px solid #47474e'
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$bgLighter',
        border: '1px solid #47474e'
      }
    }
  }
})

// -> Component
// ------------

const Button = (props: ButtonProps) => {

  return <ButtonEl {...props} />
}

export default Button