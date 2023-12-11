import { globalCss } from '@stitches/react'
import fonts from './fonts'

export const css = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,

    fontFamily: '$baseFont',
    color: '$fgBase',
    '-webkit-font-smoohting': 'antialiased',
  },

  'html, body, #root, #root > .app': {
    maxWidth: '100vw',
    maxHeight: '100vh',

    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },

  body: {
    backgroundColor: '$bgBase'
  },

  table: {
    borderCollapse: 'collapse',
    backgroundColor: 'transparent',
    borderSpacing: 0,
    width: '100%',
    maxWidth: '100%',
  },

  a: { textDecoration: 'none' },

  'input, button, select, textarea': {
    background: 'none',
    color: 'inherit',
    font: 'inherit',
    margin: 0,
    padding: 0,
    outline: 'none',
    resize: 'none',
    border: 'none',
    cursor: 'pointer',
    '-webkit-appearance': 'none',
  },

  ...fonts
}

export default globalCss(css)