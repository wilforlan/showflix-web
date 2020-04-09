import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Open Sans', sans-serif;
    }

    button {
        cursor: pointer
    }

    a {
        text-decoration: none;
        color: inherit
    }
`;
