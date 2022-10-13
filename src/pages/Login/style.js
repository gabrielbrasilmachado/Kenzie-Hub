import styled from "styled-components";

export const MainStyled = styled.main`
    max-width: 100%;
    min-height: 100vh;

    background-color: var(--gray-4);

    padding: 75px 0;

    figure{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 300px;
        
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        figure{
            width: 370px;
        }
        
    }
`

export const DivSignup = styled.div`
    width: 90%;

    margin: 16px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    a{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 38px;
        width: 100%;

        background-color: var(--gray-1);

        font-size: 16px;
        font-weight: 500;
        color: var(--gray-0);

        border: none;
        border-radius: 4px;

        cursor: pointer;
    }  
    a:hover, a:focus{
        background-color: var(--gray-2);
    }
    @media (min-width: 768px) {
        a{
            height: 48px;
        }
    }
`