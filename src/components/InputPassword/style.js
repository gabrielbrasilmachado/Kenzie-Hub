import styled, { css } from "styled-components";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export const DivInputStyled = styled.div`
display: flex;
    flex-direction: column;
    gap: 10px;

    width: 90%;

    text-align: left;

    position: relative;

    label{
        font-size: 12px;
        font-weight: 400;

        color: var(--gray-0);
    }

    input{
        height: 38px;
        width: 100%;

        background-color: var(--gray-2);

        border: 1.22px solid transparent;
        border-radius: 4px;

        ${props => props.error && css`
            border: 1.22px solid var(--error);
        `}

        padding-left: 16px;

        font-size: 16px;
        font-weight: 400;
        color: var(--gray-0);
    }

    input:focus{
        outline: none;
        border: 1.22px solid var(--gray-0);
        ${props => props.error && css`
            border: 1.22px solid var(--error);
        `}
    }

    input::placeholder{
        color: var(--gray-1);
    }

    @media (min-width: 768px) {
        input{
            height: 48px;
        }
    }
`

export const EyeInvisible = styled(AiFillEyeInvisible)`
    color: var(--gray-1);

    position: absolute;

    ${props => props.error ? css
        `top: 36px;
        right: 35px;`
        : css
            `top: 36px; 
        right: 15px;`}

    cursor: pointer;
    @media (min-width: 768px) {
        ${props => props.error ? css
        `top: 42px;
        right: 36px;;`
        : css
            `top: 42px;
        right: 16px;`}
    }
`

export const Eye = styled(AiFillEye)`
    color: var(--gray-0);

    position: absolute;

    ${props => props.error ? css
        `top: 36px;
        right: 35px;`
        : css
            `top: 36px; 
        right: 15px;`}

    cursor: pointer;
    @media (min-width: 768px) {
        ${props => props.error ? css
        `top: 42px;
        right: 36px;;`
        : css
            `top: 42px;
        right: 16px;`}
    }
`