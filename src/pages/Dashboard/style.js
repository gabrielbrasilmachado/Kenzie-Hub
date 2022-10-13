import styled from "styled-components";

export const DivStyled = styled.div`
    width: 100vw;
    min-height: 100vh;

    background-color: var(--gray-4);

    nav{
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
        align-items: center;

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

        .buttonAdd{
            background-color: var(--gray-3);
    
            border: none;
            border-radius: 4px;
            
            font-size: 20px;
            font-weight: 700;

            color: var(--gray-0);
            cursor: pointer;
        }

        .buttonAdd:hover{
            background-color: var(--gray-2);
        }
    }
`

export const Header = styled.header`
        padding: 30px 0;

        border-bottom: 2px solid var(--gray-3);

        .container{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
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

export const TechsAdd = styled.section`
    padding: 15px 0;

    .container{
        display: flex;
        gap: 16px;
    }

    p{
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-0);
    }
`

export const TechsList = styled.ul`
    width: 90%;
    max-width: 1200px;
    
    padding: 16px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    background-color: var(--gray-3);

    border-radius: 4px;

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 10px;

        height: 48px;

        background-color: var(--gray-4);

        border-radius: 4px;

        p{
            font-size: 14px;
            font-weight: 700;
            color: var(--gray-0);
        }

        span{
            font-size: 12px;
            font-weight: 400;
            color: var(--gray-0);
        }
    }

    li:hover{
        background-color: var(--gray-2);
        cursor: pointer;
    }
`