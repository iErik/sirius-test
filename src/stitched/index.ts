import { createStitches } from '@stitches/react'
import config from './config'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText
} = createStitches(config)

export { default as globalStyle } from './global'