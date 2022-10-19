import * as yup from "yup";

export const schemaRegisterTecnology = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Selecione um nível")
})