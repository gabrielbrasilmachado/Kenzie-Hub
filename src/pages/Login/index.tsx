import { DivSignup, MainStyled } from "./style";
import Logo from "../../assets/Logo.png";
import { FormStyled } from "../../components/Form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/login";
import { useContext } from "react";
import { iSubmitLogin, UserContext } from "../../contexts/UserContext";
import { Loading } from "../../components/Loading";

export const Login = () => {
  const { submitLogin, user, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSubmitLogin>({
    resolver: yupResolver(schemaLogin),
  });

  if (loading) {
    return <Loading />;
  }

  return user ? (
    <Navigate to={"/dashboard"}></Navigate>
  ) : (
    <MainStyled>
      <figure>
        <img src={Logo} alt="Logo da Kenzie Hub" />
      </figure>
      <FormStyled onSubmit={handleSubmit(submitLogin)}>
        <p>Login</p>
        <Input
          label={"Email"}
          id={"emailLogin"}
          name={"emailLogin"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
          error={errors.email?.message}
        ></Input>
        <InputPassword
          label={"Senha"}
          id={"passwordLogin"}
          name={"passwordLogin"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password?.message}
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
