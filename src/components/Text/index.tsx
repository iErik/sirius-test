import { Link } from 'react-router-dom'
import { styled } from '@stitched'

// -> Types
// --------

type TextType
  = 'p'
  | 'a'
  | 'em'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'

type TextSize
  = 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'

type TextWeight
  = 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'

type TextColor
  = 'base'
  | 'fg10'
  | 'fg20'
  | 'fg30'
  | 'fg40'
  | 'fg50'
  | 'fg60'
  | 'fg70'
  | 'fg80'
  | 'fg90'

export type TextProps = React.PropsWithChildren & {
  decorative?: boolean
  type?: TextType
  size?: TextSize
  color?: TextColor
  weight?: TextWeight
  sans?: boolean
  serif?: boolean
  mono?: boolean
  href?: string
  link?: boolean
  muted?: boolean
  uppercase?: boolean
  lowercase?: boolean
}

// -> Component
// ------------

const TextEl = styled('p', {
  color: '$fgBase',
  fontFamily: '$sans',
  fontWeight: '$normal',
  fontSize: '$base',

  variants: {
    decorative: { true: { fontFamily: '$decorative' } },
    sans: { true: { fontFamily: '$sans' } },
    serif: { true: { fontFamily: '$serif' } },
    mono: { true: { fontFamily: '$mono' } },
    uppercase: { true: { textTransform: 'uppercase' } },
    lowercase: { true: { textTransform: 'lowercase' } },

    link: {
      true: {
        cursor: 'pointer',
        color: '#00D091',

        '&:hover': { textDecoration: 'underline' }
      }
    },

    muted: {
      true: {
        backgroundColor: '#595f69',
        borderRadius: 5,
        padding: '0 7px',
        fontWeight: '$medium'
      }
    },

    color: {
      base: { color: '$fgBase' },
      fg10: { color: '$fg10' },
      fg20: { color: '$fg20' },
      fg30: { color: '$fg30' },
      fg40: { color: '$fg40' },
      fg50: { color: '$fg50' },
      fg60: { color: '$fg60' },
      fg70: { color: '$fg70' },
      fg80: { color: '$fg80' },
      fg90: { color: '$fg90' }
    },

    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      base: { fontSize: '$base' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
    },

    weight: {
      thin: { fontWeight: '$thin' },
      light: { fontWeight: '$light' },
      normal: { fontWeight: '$normal' },
      medium: { fontWeight: '$medium' },
      semiBold: { fontWeight: '$semiBold' },
      bold: { fontWeight: '$bold' },
      extraBold: { fontWeight: '$extraBold' },
    },

    type: {
      p: { fontSize: '$base' },
      span: { fontSize: '$sm' },
      em: {
        fontSize: '$base',
        fontWeight: '$bold'
      },

      h1: {
        fontFamily: '$decorative',
        fontSize: '$h1'
      },

      h2: {
        fontFamily: '$decorative',
        fontSize: '$h2'
      },

      h3: {
        fontFamily: '$decorative',
        fontSize: '$h3'
      },

      h4: {
        fontFamily: '$decorative',
        fontSize: '$h4'
      },

      h5: {
        fontFamily: '$decorative',
        fontSize: '$h5'
      },
    }
  }
})

const Text = ({
  type = 'p',
  href,
  ...props
}: TextProps) => {

  return (
    <TextEl
      as={props.link ? Link : type || 'p'}
      to={href}
      {...props}
    >
      { props.children }
    </TextEl>
  )
}

export default Text
