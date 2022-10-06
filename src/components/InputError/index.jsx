import { DivError, ErrorIcon } from "./style";

export const InputError = ({ error }) => {
  return (
    <DivError>
      <ErrorIcon></ErrorIcon>
      <div>
        <p>{error}</p>
      </div>
    </DivError>
  );
};
