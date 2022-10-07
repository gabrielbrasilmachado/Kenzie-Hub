import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;
    }

    ul, ol, li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    img{
        max-width: 100%;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative:#59323F;
        --gray-4: #121214;
        --gray-3:#212529;
        --gray-2:#343B41;
        --gray-1:#868E96;
        --gray-0:#F8F9FA;
        --sucess: #3FE864;
        --error: #E83F5B;
        --toastify-color-dark: var(--gray-2);
        --toastify-color-success: var(--sucess);
        --toastify-color-error: var(--error);
        --toastify-color-transparent: rgba(255, 255, 255, 0.7);

        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-icon-color-error: var(--toastify-color-error);
    }
`