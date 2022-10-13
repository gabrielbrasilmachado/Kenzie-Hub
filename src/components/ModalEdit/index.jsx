import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { schemaEditTecnology } from "../../validations/editTecnology";
import { InputError } from "../InputError";
import { ButtonsDiv, ModalEditStyled, SelectStyledDiv } from "./style";

export const ModalEdit = () => {
  const { setModal, currentTech, editTech, deleteTech } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEditTecnology),
  });

  return (
    <ModalEditStyled error={errors.status}>
      <div className="modalHeader">
        <p>Tecnologia Detalhes</p>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(editTech)}>
        <label htmlFor="tech">Nome do projeto</label>
        <input
          id="tech"
          type="text"
          defaultValue={currentTech.title}
          readOnly
        />
        <SelectStyledDiv error={errors.status}>
          <label htmlFor="status">Selecionar status</label>
          <select
            name="status"
            id="status"
            {...register("status")}
            defaultValue={""}
          >
            <option value="">Selecione uma opção</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors?.status && (
            <InputError error={errors.status.message}></InputError>
          )}
        </SelectStyledDiv>
        <ButtonsDiv>
          <button
            className="editButton"
            type="submit"
            disabled={errors.status ? true : false}
          >
            Salvar Alterações
          </button>
          <button
            className="deleteButton"
            type="button"
            onClick={() => {
              deleteTech();
            }}
          >
            Excluir
          </button>
        </ButtonsDiv>
      </form>
    </ModalEditStyled>
  );
};
