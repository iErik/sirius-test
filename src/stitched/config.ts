import { toRgba } from '@utils/misc'

export default {
  theme: {
    colors: {
      //bgBase: '#1C2128',
      bgBase: '#1d1b22',
      bgLight: '#26262e',
      bgLighter: '#34343b',

      fgBase: '#FFF',
      fg10: toRgba('#FFFFFF', .1) as string,
      fg20: toRgba('#FFFFFF', .2) as string,
      fg30: toRgba('#FFFFFF', .3) as string,
      fg40: toRgba('#FFFFFF', .4) as string,
      fg50: toRgba('#FFFFFF', .5) as string,
      fg60: toRgba('#FFFFFF', .6) as string,
      fg70: toRgba('#FFFFFF', .7) as string,
      fg80: toRgba('#FFFFFF', .8) as string,
      fg90: toRgba('#FFFFFF', .9) as string,
    },

    fonts: {
      mono: 'Share Tech Mono, monospace',
      sans: 'Chillax, sans-serif',
      serif: 'serif',

      decorativeFont: '$mono',
      baseFont: '$sans'
    },

    fontSizes: {
      xs:    '13px',
      sm:    '14px',
      base:  '16px',
      lg:    '24px',
      xl:    '30px',
      '2xl': '38px',
      '3xl': '45px',

      h5: '$xs',
      h4: '$sm',
      h3: '$md',
      h2: '$lg',
      h1: '$xl'
    },

    fontWeights: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,

      base: '$normal',
      title: '$normal'
    }
  },

  utils: {
    ellipsis: (maxWidth: string | number = '100%') => ({
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth,
    }),

    bgImg: (url: string) => ({
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    gapBottom: (value: string | number) => ({
      '&:not(:last-child)': { marginBottom: value }
    }),

    gapTop: (value: string | number) => ({
      '&:not(:last-child)': { marginTop: value }
    }),

    gapLeft: (value: string | number) => ({
      '&:not(:last-child)': { marginLeft: value }
    }),

    gapRight: (value: string | number) => ({
      '&:not(:last-child)': { marginRight: value }
    }),

    linearGradient: (value: string) => ({
      backgroundImage:`linear-gradient(${value})`
    }),

    btRadius: (value: string | number) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
    }),

    bbRadius: (value: string | number) => ({
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value,
    }),

    blRadius: (value: string | number) => ({
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value,
    }),

    brRadius: (value: string | number) => ({
      borderTopRightRadius: value,
      borderBottomRightRadius: value,
    })
  },

  media: {
    mobile: '(max-width: 640px)'
  }
}