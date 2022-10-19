import styled, { css } from "styled-components";

interface iDivInputStyledProps {
  error: string | undefined;
}

export const DivInputStyled = styled.div<iDivInputStyledProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 90%;

  text-align: left;

  position: relative;

  label {
    font-size: 12px;
    font-weight: 400;

    color: var(--gray-0);
  }

  input {
    height: 38px;

    background-color: var(--gray-2);

    border: 1.22px solid transparent;
    border-radius: 4px;

    ${(props) =>
      props.error &&
      css`
        border: 1.22px solid var(--error);
      `}

    padding-left: 16px;

    font-size: 16px;
    font-weight: 400;
    color: var(--gray-0);
  }

  input:focus {
    outline: none;
    border: 1.22px solid var(--gray-0);
    ${(props) =>
      props.error &&
      css`
        border: 1.22px solid var(--error);
      `}
  }

  input::placeholder {
    color: var(--gray-1);
  }

  @media (min-width: 768px) {
    input {
      height: 48px;
    }
  }
`;
