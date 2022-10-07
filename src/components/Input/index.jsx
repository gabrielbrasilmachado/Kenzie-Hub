import { InputError } from "../InputError";
import { DivInputStyled } from "./style";

export const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <DivInputStyled error={error}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error && <InputError error={error.message}></InputError>}
    </DivInputStyled>
  );
};
