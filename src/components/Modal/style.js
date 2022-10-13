import styled from "styled-components";

export const ModalStyled = styled.div`
    max-width: 100%;
    width: 100vw;
    height: 100vh;

    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    section{
        max-width: 370px;
        width: 90%;
        height: fit-content;
    }
`