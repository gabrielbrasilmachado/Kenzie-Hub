import { ModalStyled } from "./style";

interface iModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: iModalProps) => {
  return (
    <ModalStyled>
      <section>{children}</section>
    </ModalStyled>
  );
};
