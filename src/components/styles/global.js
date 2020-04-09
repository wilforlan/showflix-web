import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');  
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
