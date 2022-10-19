import * as yup from "yup";

export const schemaLogin = yup.object().shape({
    email: yup
        .string()
        .required("E-mail obrigatório.")
        .email("Digite um e-mail válido!"),
    password: yup
        .string()
        .required("Senha obrigatória.")
});