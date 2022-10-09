import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello world</h1>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
