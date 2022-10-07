import { useState } from "react";
import { InputError } from "../InputError";
import { DivInputStyled, Eye, EyeInvisible } from "./style";

export const InputPassword = ({
  label,
  id,
  name,
  placeholder,
  register,
  error,
}) => {
  const [inputType, setInputType] = useState("password");
  return (
    <DivInputStyled error={error}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type={inputType}
          name={name}
          id={id}
          placeholder={placeholder}
          {...register}
        />
        {error && <InputError error={error.message}></InputError>}
        {inputType === "password" ? (
          <EyeInvisible
            error={error}
            onClick={() => {
              setInputType("text");
            }}
          ></EyeInvisible>
        ) : (
          <Eye
            error={error}
            onClick={() => {
              setInputType("password");
            }}
          ></Eye>
        )}
      </div>
    </DivInputStyled>
  );
};
