import styled from "styled-components";

export const FormStyled = styled.form`
    width: 90%;
    
    margin: 26px auto;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    gap:20px;

    background-color: var(--gray-3);

    border-radius: 4px;

    align-items: center;

    p{
        font-size: 16px;
        font-weight: 700;

        color: var(--gray-0);
    }

    span{
        font-size: 12px;
        font-weight: 400;

        color: var(--gray-1);
    }
    

    @media (min-width: 768px) {
            width: 370px;
    }
`