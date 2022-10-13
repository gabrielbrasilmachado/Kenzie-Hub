import styled, { css } from "styled-components";

export const ModalEditStyled = styled.div`
    .modalHeader{
        height: 50px;
        background-color: var(--gray-2);

        padding: 0 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 14px;
            font-weight: 700;

            color: var(--gray-0);
        }

        button{
            background-color: transparent;

            border: none;

            font-size: 16px;
            font-weight: 600;

            color: var(--gray-1);
            cursor: pointer;
        }
    }

    form{
        
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: var(--gray-3);

        padding: 20px 0;

        gap: 16px;

        label{
        width: 90%;
        font-size: 12px;
        font-weight: 400;

        color: var(--gray-0);
        }

        input{
            width: 90%;
            height: 38px;

            background-color: var(--gray-2);

            border: 1.22px solid transparent;
            border-radius: 4px;

            padding-left: 16px;

            font-size: 16px;
            font-weight: 400;
            color: var(--gray-1);
        }

        input:focus{
            outline: none;
            border: 1.22px solid var(--gray-0);
        }

        input::placeholder{
            color: var(--gray-1);
        }

    @media (min-width: 768px) {
        input{
            height: 48px;
        }
    }
    }
`

export const SelectStyledDiv = styled.div`
    position: relative;
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

        border: 1.22px solid transparent;
        color: var(--gray-0);
        
        ${props => props.error && css`
        border: 1.22px solid var(--error);
        color: var(--error);
        `}
        border-radius: 4px;
        
        outline: none;

        padding: 0 16px;

        font-size: 16px;
        font-weight: 400;

        option{
            color: var(--gray-0);
        }
    }

    @media (min-width: 768px) {
        select{
            height: 48px;
        }
    }
`

export const ButtonsDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    .editButton{
        height: 38px;
        width: 65%;

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
        
        &:disabled{
            background-color: var(--color-primary-negative)
        }

        @media (min-width: 768px) {
            height: 48px;
        }
    }

    .deleteButton{
        height: 38px;
        width: 30%;

        background-color: var(--gray-1);

        font-size: 16px;
        font-weight: 500;
        color: var(--gray-0);

        border: none;
        border-radius: 4px;

        cursor: pointer;

        &:hover, &:focus{
            background-color: var(--gray-2);
        }

        @media (min-width: 768px) {
            height: 48px;
        }
    }
`