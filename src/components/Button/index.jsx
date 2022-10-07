import { ButtonStyled } from "./style";

export const Button = ({ type, text }) => (
  <>
    <ButtonStyled type={type}>{text}</ButtonStyled>
  </>
);
