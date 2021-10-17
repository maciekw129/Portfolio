import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Gentium Book Basic', serif;
    }

    body {
        background-color: #255E73;
        font-family: 'Gentium Book Basic', serif;
        padding: 3rem 4rem;
    }
`;

export default GlobalStyles;