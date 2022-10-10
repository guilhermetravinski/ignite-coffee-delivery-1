import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme['--base-background']};
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
    }

`
