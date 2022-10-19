import { InputError } from "../InputError";
import { DivInputStyled } from "./style";

interface iInputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  register: object;
  error: string | undefined;
}

export const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  register,
  error,
}: iInputProps) => {
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
      {error && <InputError error={error}></InputError>}
    </DivInputStyled>
  );
};
