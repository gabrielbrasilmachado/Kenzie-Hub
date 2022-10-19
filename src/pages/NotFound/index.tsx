import { Link } from "react-router-dom";
import { NotFoundStyled } from "./style";

export const NotFound = () => {
  return (
    <NotFoundStyled>
      <h1>404</h1>
      <p>Página não encontrada :(</p>
      <Link to={"/"}>Voltar para home</Link>
    </NotFoundStyled>
  );
};
