import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { iSubmitTech, TechContext } from "../../contexts/TechContext";
import { schemaRegisterTecnology } from "../../validations/registerTecnology";
import { Button } from "../Button";
import { Input } from "../Input";
import { ModalAddStyled, SelectStyledDiv } from "./style";

export const ModalAdd = () => {
  const { setModal, submitTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSubmitTech>({
    resolver: yupResolver(schemaRegisterTecnology),
  });
  return (
    <ModalAddStyled>
      <div className="modalHeader">
        <p>Cadastrar tecnologia</p>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(submitTech)}>
        <Input
          label={"Nome"}
          id={"title"}
          name={"title"}
          type={"Text"}
          placeholder={"Digite a tecnologia"}
          register={register("title")}
          error={errors.title?.message}
        ></Input>
        <SelectStyledDiv>
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")} name="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </SelectStyledDiv>
        <Button text={"Cadastrar Tecnologia"} type={"submit"}></Button>
      </form>
    </ModalAddStyled>
  );
};
