// 1. Import the extendTheme function
import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    50: '#E0FFF9',
    100: '#BDFFF3',
    // 7AFFE7
    200: '#00B593',
    300: '#38FFDB',
    400: '#00F5C8',
    500: '#00B593',
    600: '#008F75',
    700: '#006B57',
    800: '#00473A',
    900: '#00241D'
  },
  second: {
    50: '#ebfef7',
    100: '#d0fbe9',
    200: '#a4f6d8',
    300: '#6aebc5',
    400: '#2fd8ab',
    500: '#0abf95',
    600: '#009b7a',
    700: '#00866d',
    800: '#036250',
    900: '#045043'
  }
}

const components: Record<string, ComponentStyleConfig> = {
  Container: {
    baseStyle: {
      maxWidth: '100%'
    }
  }
}

const theme = extendTheme({ colors, components })

export default theme
