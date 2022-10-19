import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100vw;
    min-height: 100vh;

    background-color: var(--gray-4);

    padding: 40px 0;

    .divLogo{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 90%;
        
        margin: 0 auto;
        
        a{
            background-color: var(--gray-3);
            
            padding: 10px 15px;
            
            border: none;
            border-radius: 4px;
            
            font-size: 10px;
            font-weight: 600;
            
            color: var(--gray-0);
            
            cursor: pointer;
        }
        
        a:hover{
            background-color: var(--gray-2);
        }
    }

    @media (min-width: 768px) {
        .divLogo{
            width: 370px;
        }
        
    }
`

export const SelectStyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 90%;

    text-align: left;

    label{
        font-size: 12px;
        font-weight: 400;

        color: var(--gray-0);
    }

    select{
        height: 38px;

        background-color: var(--gray-2);

        color: var(--gray-1);

        border: 1.22px solid transparent;
        border-radius: 4px;

        padding: 0 16px;

        font-size: 16px;
        font-weight: 400;
        color: var(--gray-1);
    }

    @media (min-width: 768px) {
        select{
            height: 48px;
        }
    }
`