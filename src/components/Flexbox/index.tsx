import type { PropsWithChildren } from 'react'
import { styled } from '@stitched'

// -> Types
// --------

type VerticalAlign
  = 'top'
  | 'center'
  | 'bottom'

type HorizontalAlign
  = 'left'
  | 'center'
  | 'right'
  | 'stretch'
  | 'spaceBetween'
  | 'spaceAround'

export type FlexboxProps = PropsWithChildren & {
  hAlign?: HorizontalAlign
  vAlign?: VerticalAlign
  column?: boolean
  hExpand?: boolean
  vExpand?: boolean
  grow?: boolean
  padding?: string | number
  gap?: string | number
}

// -> Component
// ------------

const FlexboxEl = styled('div', {
  display: 'flex',

  variants: {
    hAlign: {
      right: {
        justifyContent: 'flex-end'
      },
      center: {
        justifyContent: 'center'
      },
      left: {
        justifyContent: 'flex-start'
      },
      stretch: {
        justifyContent: 'stretch'
      },
      spaceBetween: {
        justifyContent: 'space-between'
      },
      spaceAround: {
        justifyContent: 'space-around'
      }
    },

    vAlign: {
      top: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      bottom: {
        alignItems: 'flex-end'
      }
    },

    grow: { true: { flexGrow: 1 } },
    column: { true: { flexDirection: 'column' } },
    hExpand: { true: { width: '100%' } },
    vExpand: { true: { height: '100%' } }
  },

  compoundVariants: [
    {
      column: true,
      hAlign: 'left',
      vAlign: 'top',
      css: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }
    },
    {
      column: true,
      hAlign: 'left',
      vAlign: 'center',
      css: {
        justifyContent: 'center',
        alignItems: 'flex-start'
      }
    },
    {
      column: true,
      hAlign: 'left',
      vAlign: 'bottom',
      css: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }
    },
    {
      column: true,
      hAlign: 'center',
      vAlign: 'top',
      css: {
        justifyContent: 'flex-start',
        alignItems: 'center'
      }
    },
    {
      column: true,
      hAlign: 'center',
      vAlign: 'center',
      css: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    {
      column: true,
      hAlign: 'center',
      vAlign: 'left',
      css: {
        justifyContent: 'flex-end',
        alignItems: 'center'
      }
    },
    {
      column: true,
      hAlign: 'right',
      vAlign: 'top',
      css: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
      }
    },
    {
      column: true,
      hAlign: 'right',
      vAlign: 'center',
      css: {
        justifyContent: 'center',
        alignItems: 'flex-end'
      }
    },
    {
      column: true,
      hAlign: 'right',
      vAlign: 'bottom',
      css: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }
    }
   ]
})

const Flexbox = ({
  gap,
  padding,
  ...props
}: FlexboxProps) => {
  const gapProp = props.column
    ? 'marginBottom'
    : 'marginRight'

  const extraCss = {
    ...(padding ? { padding } : {}),
    ...(gap ? {
      '& > *:not(:last-child)': { [gapProp]: +gap }
    } : {})
  } 

  return (
    <FlexboxEl
      className="app-flexbox"
      children={props.children}
      css={extraCss}
      {...props}
    />
  )
}

Flexbox.toString = () => 'div.app-flexbox'
export default Flexbox
