import { FormStyled } from "../../components/Form";
import Logo from "../../assets/Logo.png";
import { MainStyled, SelectStyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { Button } from "../../components/Button";
import { schemaRegister } from "../../validations/register";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { iSubmitRegister, UserContext } from "../../contexts/UserContext";
import { Loading } from "../../components/Loading";

export const Register = () => {
  const { submitRegister, user, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSubmitRegister>({
    resolver: yupResolver(schemaRegister),
  });

  if (loading) {
    return <Loading />;
  }

  return user ? (
    <Navigate to={"/dashboard"}></Navigate>
  ) : (
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
          error={errors.name?.message}
        ></Input>
        <Input
          label={"E-mail"}
          id={"emailRegister"}
          name={"emailRegister"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
          error={errors.email?.message}
        ></Input>
        <InputPassword
          label={"Senha"}
          id={"passwordRegister"}
          name={"passwordRegister"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password?.message}
        ></InputPassword>
        <InputPassword
          label={"Confirmar Senha"}
          id={"confirmPassword"}
          name={"confirmPassword"}
          placeholder={"Digite novamente sua senha"}
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        ></InputPassword>
        <Input
          label={"Bio"}
          id={"bio"}
          name={"bio"}
          type={"text"}
          placeholder={"Fale sobre você"}
          register={register("bio")}
          error={errors.bio?.message}
        ></Input>
        <Input
          label={"Contato"}
          id={"contact"}
          name={"contact"}
          type={"text"}
          placeholder={"Opção de contato"}
          register={register("contact")}
          error={errors.contact?.message}
        ></Input>
        <SelectStyledDiv>
          <label htmlFor="course_module">Selecionar módulo</label>
          <select
            id="course_module"
            {...register("course_module")}
            name="course_module"
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
