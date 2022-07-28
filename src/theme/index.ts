// 1. Import the extendTheme function
import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    50: '#780417',
    100: '#6D0415',
    200: '#630413',
    300: '#5A0411',
    400: '#52040F',
    500: '#A02E2B',
    600: '#30090D',
    700: '#780417',
    800: '#780417'
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
