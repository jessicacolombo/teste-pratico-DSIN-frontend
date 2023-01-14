import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        //Collor Palette
        --linear-gradient: linear-gradient(
            0deg, rgba(253,45,234,1) 0%, rgba(188,67,255,1) 100%
        );
        --box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        //Typography
        --wheight-1: 600;
        --wheight-2: 400;
        --wheight-3: 300;
        --wheight-4: 200;
        --title: 1.3rem;
        --headline: 1rem;

        //Border-radius
        --border-radius: 4px;
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: var(--linear-gradient)
    }

    button {
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        color: black;
        border: 1px solid black;
        padding: 7px;
        border-radius: var(--border-radius);
    }
    
    input{
        border: 1px solid black;
        padding: 7px 7px 7px 10px;
        border-radius: var(--border-radius);
    }

`;
