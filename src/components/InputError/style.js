import { IoIosAlert } from "react-icons/io";
import styled from "styled-components";

export const DivError = styled.div`
    height: 15px;
    width: 15px;

    background-color: var(--gray-2);

    position: absolute;
    top: 36px;
    right: 15px;
    z-index: 100;

    &:hover, &:focus{
        div{
            display: flex;
        }
    }

    div{
        display: none;

        justify-content: center;
        align-items: center;

        position: absolute;
        top: -60px;
        right: -87px;
        z-index: 200;

        border-radius: 4px;

        padding: 0px 5px;

        width: 200px;
        height: 50px;

        background-color: var(--gray-0);

        p{
            text-align: left;
            color: var(--error);
        }
    }
    div:after{
        content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-top: 10px solid var(--gray-0);
    bottom: -10px; /*localização. Experimente alterar para 'bottom'*/
    left: 48%;
    }

    @media (min-width: 768px) {
        top: 42px;
        right: 16px;
    }
`

export const ErrorIcon = styled(IoIosAlert)`
    color: var(--error);
`