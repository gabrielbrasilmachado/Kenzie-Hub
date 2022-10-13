import styled from "styled-components";

export const ListLoadingStyled = styled.div`
    width: 100%;
    height: 300px;

    background-color: var(--gray-4);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    div{
        animation: loading 1s infinite;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 10px solid var(--gray-1);
        border-top-color: var(--color-primary);
    }

    @keyframes loading {
        to{
            transform: rotate(1turn);
        }
    }
`