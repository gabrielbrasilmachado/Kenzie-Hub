import { ModalStyled } from "./style";

export const Modal = ({ children }) => {
  return (
    <ModalStyled>
      <section>{children}</section>
    </ModalStyled>
  );
};
