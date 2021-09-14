import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --green: #079992;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #576574;
    --text-body: #969CB3;
    --background: #f0f2f5;
    --shape: #FFFFFF;
    --input-background: #e7e9ee;
    --input-border: #D7D7D7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`;