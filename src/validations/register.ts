import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    email: yup
        .string()
        .required("E-mail obrigatório.")
        .email("Digite um e-mail válido!"),
    password: yup
        .string()
        .required("Senha obrigatória.")
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
        .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
        .matches(/\d/, "Deve conter ao menos um número")
        .matches(/\W|_/, "Deve conter ao menos um caracter especial"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais!"),
    bio: yup.string().required("Bio obrigatória."),
    contact: yup.string().required("Contato obrigatório."),
    course_module: yup.string().required("Selecione um módulo."),
});