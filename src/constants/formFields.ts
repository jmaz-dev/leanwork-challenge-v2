import { FormFields } from "../interfaces/form-request";

export const formFields: FormFields = [
 {
  name: "username",
  label: "Nome Completo",
  validation: {
   required: true,
   minLength: 3,
   errorMessage: "* Seu nome precisa conter pelo menos 3 caracteres.",
  },
 },
 {
  name: "email",
  label: "E-mail",
  validation: {
   required: true,
   email: true,
   errorMessage: "* Por favor, digite um e-mail válido.",
  },
 },
 {
  name: "cpf",
  label: "CPF",
  validation: {
   required: true,
   errorMessage: "* Campo obrigatório",
  },
 },
 {
  name: "tel",
  label: "Telefone",
  validation: {
   required: true,
   errorMessage: "* Campo obrigatório",
  },
 },
];
