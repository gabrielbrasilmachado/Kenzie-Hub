import styled from "styled-components";

export const NotFoundStyled = styled.main`
    width: 100%;
    height: 100vh;

    background-color: var(--gray-4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;


    h1{
        font-size: 100px;
        font-weight: 700;
        color: var(--gray-0);
    }

    p{
        font-size: 24px;
        font-weight: 700;
        color: var(--gray-0);
    }

    a{
        height: 38px;

        padding: 5px 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-primary);

        font-size: 16px;
        font-weight: 500;
        color: var(--gray-0);

        border-radius: 4px;
    }
`