import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      outline: none;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: ${(props) => props.theme.colors['base-background']};
    }

    body, input, textarea, button {
      font-weight: 400;
      font-size: 1rem;
      font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    h1, h2, h3, h4 {
      font-family: ${(props) => props.theme.fonts.title}, cursive;
    }

`
