import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Insira seu email"),
  password: yup.string().required("Insira sua senha"),
});
