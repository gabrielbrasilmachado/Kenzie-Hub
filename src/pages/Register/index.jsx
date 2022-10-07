import { FormStyled } from "../../components/Form";
import Logo from "../../assets/Logo.png";
import { MainStyled, SelectStyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/axios";
import { schemaRegister } from "../../validations/register";
import { useEffect } from "react";

export const Register = ({ user }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const submitRegister = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <MainStyled>
      <div className="divLogo">
        <figure>
          <img src={Logo} alt="Logo da Kenzie Hub" />
        </figure>
        <Link to={"/"}>Voltar</Link>
      </div>
      <FormStyled onSubmit={handleSubmit(submitRegister)}>
        <p>Crie sua conta</p>
        <span>Rápido e grátis, vamos nessa</span>
        <Input
          label={"Nome"}
          id={"name"}
          name={"name"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
          register={register("name")}
          error={errors.name}
        ></Input>
        <Input
          label={"E-mail"}
          id={"emailRegister"}
          name={"emailRegister"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
          error={errors.email}
        ></Input>
        <InputPassword
          label={"Senha"}
          id={"passwordRegister"}
          name={"passwordRegister"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password}
        ></InputPassword>
        <InputPassword
          label={"Confirmar Senha"}
          id={"confirmPassword"}
          name={"confirmPassword"}
          placeholder={"Digite novamente sua senha"}
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        ></InputPassword>
        <Input
          label={"Bio"}
          id={"bio"}
          name={"bio"}
          type={"text"}
          placeholder={"Fale sobre você"}
          register={register("bio")}
          error={errors.bio}
        ></Input>
        <Input
          label={"Contato"}
          id={"contact"}
          name={"contact"}
          type={"text"}
          placeholder={"Opção de contato"}
          register={register("contact")}
          error={errors.contact}
        ></Input>
        <SelectStyledDiv>
          <label htmlFor="course_module">Selecionar módulo</label>
          <select
            name="course_module"
            id="course_module"
            {...register("course_module")}
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
        </SelectStyledDiv>
        <Button type={"submit"} text={"Cadastrar"}></Button>
      </FormStyled>
    </MainStyled>
  );
};
