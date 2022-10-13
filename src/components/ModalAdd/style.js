import styled from "styled-components";

export const ModalAddStyled = styled.div`
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

        border: 1.22px solid transparent;
        border-radius: 4px;

        padding: 0 16px;

        font-size: 16px;
        font-weight: 400;
        color: var(--gray-0);

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