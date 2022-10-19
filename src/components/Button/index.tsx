import { ButtonStyled } from "./style";

interface iButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

export const Button = ({ type, text }: iButtonProps) => (
  <>
    <ButtonStyled type={type}>{text}</ButtonStyled>
  </>
);
