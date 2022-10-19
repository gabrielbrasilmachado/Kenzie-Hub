import styled from "styled-components";

export const ButtonStyled = styled.button`
    height: 38px;
    width: 90%;

    background-color: var(--color-primary);

    font-size: 16px;
    font-weight: 500;
    color: var(--gray-0);

    border: none;
    border-radius: 4px;

    cursor: pointer;

    &:hover, &:focus{
        background-color: var(--color-primary-focus);
    }

    @media (min-width: 768px) {
        height: 48px;
    }
`