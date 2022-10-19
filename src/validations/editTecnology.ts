import * as yup from "yup";

export const schemaEditTecnology = yup.object().shape({
    status: yup.string().required("Opção obrigatória")
})