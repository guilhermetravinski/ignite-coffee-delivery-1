import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :focus {
        outline: 0;
        box-shadow: 0 0 0 2px #fff;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
    }

`