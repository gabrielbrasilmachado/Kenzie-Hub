import { DivSignup, MainStyled } from "./style";
import Logo from "../../assets/Logo.png";
import { FormStyled } from "../../components/Form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/login";
import { api } from "../../services/axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@KenzieHub:token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const submitLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        toast.success("Login realizado com sucesso!");
        setUser(res.data.user);
        localStorage.setItem("@KenzieHub:token", res.data.token);
        localStorage.setItem("@KenzieHub:userId", res.data.user.id);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
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
          error={errors.email}
        ></Input>
        <InputPassword
          label={"Senha"}
          id={"passwordLogin"}
          name={"passwordLogin"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password}
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
