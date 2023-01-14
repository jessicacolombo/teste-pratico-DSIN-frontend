import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[0-9]/, "Deve conter ao menos um número")
    .matches(/[!@#_$%^&/+|*]/, "Deve conter ao menos um caracter especial")
    .matches(/.{8,}/, "Deve conter 8 caracteres"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
  cellphone: yup.string().required("Insira um telefone de contato"),
});
