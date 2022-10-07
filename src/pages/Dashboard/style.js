import styled from "styled-components";

export const MainStyled = styled.main`
    width: 100vw;
    min-height: 100vh;

    background-color: var(--gray-4);

    header{
        width: 100%;
        padding: 20px 0;
        border-bottom: 2px solid var(--gray-3);
    }

    .container{
        width: 90%;
        max-width: 1200px;

        margin: 0 auto;

        display: flex;
        justify-content: space-between;

        img{
            width: 105px;
        }

        button{
            background-color: var(--gray-3);
            
            padding: 5px 15px;
            
            border: none;
            border-radius: 4px;
            
            font-size: 10px;
            font-weight: 600;
            
            color: var(--gray-0);
            
            cursor: pointer;
        }
        button:hover{
            background-color: var(--gray-2);
        }
    }
`

export const UserSection = styled.section`
        padding: 30px 0;

        border-bottom: 2px solid var(--gray-3);

        .container{
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        p{
            font-size: 18px;
            font-weight: 700;
            color: var(--gray-0);
        }

        span{
            font-size: 12px;
            font-weight: 600;
            color: var(--gray-1);
        }

        @media (min-width: 768px) {
            .container{
                flex-direction: row;
            }
        }
`

export const SectionStyled = styled.section`
    padding: 30px 0;

    .container{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    p{
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-0);
    }

    span{
        font-size: 16px;
        font-weight: 400;
        color: var(--gray-0);
    }
`