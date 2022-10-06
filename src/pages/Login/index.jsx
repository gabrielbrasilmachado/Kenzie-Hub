import { DivSignup, MainStyled } from "./style";
import Logo from "../../assets/Logo.png";
import { FormStyled } from "../../components/Form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <MainStyled>
      <figure>
        <img src={Logo} alt="Logo da Kenzie Hub" />
      </figure>
      <FormStyled>
        <p>Login</p>
        <Input
          label={"Email"}
          id={"emailLogin"}
          name={"emailLogin"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
        ></Input>
        <InputPassword
          label={"Senha"}
          id={"passwordLogin"}
          name={"passwordLogin"}
          placeholder={"Digite aqui sua senha"}
        ></InputPassword>
        <Button type={"submit"} text={"Entrar"}></Button>
        <DivSignup>
          <span>Ainda não possui uma conta?</span>
          <Link to={"/register"}>Cadastre-se</Link>
        </DivSignup>
      </FormStyled>
    </MainStyled>
  );
};
