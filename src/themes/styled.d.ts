import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string,
      background: string,
      alert: string,
      white: string,
      secondary: string,
      light: string,
      shape: string,
      success: string,
      text: string,
    },
    fonts: {
      title: string,
      bold: string,
      text: string,
    }
  }
}
