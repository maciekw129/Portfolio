import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
    }

    body {
        background-color: hsl(0, 0%, 85%);
        font-family: 'Gentium Book Basic', serif;
        width: 100%;
    }

    a {
        color: black;
    }

    h1 {
        font-family: 'Gentium Book Basic', serif;
    }
`;

//#3588A6

export default GlobalStyles;