import { DivError, ErrorIcon } from "./style";

interface iInputErrorProps {
  error: string | undefined;
}

export const InputError = ({ error }: iInputErrorProps) => {
  return (
    <DivError>
      <ErrorIcon></ErrorIcon>
      <div>
        <p>{error}</p>
      </div>
    </DivError>
  );
};
