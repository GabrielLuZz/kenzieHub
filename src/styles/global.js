import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --bg: #121214;

        --white: #fff;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
    }

    body {
        background-color: var(--bg);
        color: var(--grey-0);
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`;
