import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "../interfaces/form-list";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { storageKey } from "../constants/store";

interface Props {
 formFields: FormFields;
}

const FormComponent: React.FC<Props> = ({ formFields }) => {
 const navigate = useNavigate();
 type CreateUserFormData = z.infer<typeof formSchema>;
 type FormFieldName = "cpf" | "tel" | "username" | "email";

 const { saveData } = useLocalStorage(storageKey);

 const formSchema = z.object({
  username: z
   .string()
   .min(1, "* Campo obrigatório")
   .min(3, {
    message: "* Mínimo 3 characters.",
   })
   .transform((value) =>
    value
     ?.trim()
     .split(" ")
     .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
     .join(" ")
   ),
  email: z.string().min(1, "* Campo obrigatório").email("* Digite um e-mail válido").min(1, "* Campo obrigatório"),
  cpf: z.string().min(1, "* Campo obrigatório").min(11, "* Digite um CPF válido"),
  tel: z.string().min(1, "* Campo obrigatório").min(10, "* Digite um telefone válido"),
 });

 const form = useForm<CreateUserFormData>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   username: "",
   email: "",
   tel: "",
   cpf: "",
  },
 });

 function applyCpfMask(value: string): string {
  return value
   .replace(/\D/g, "")
   .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
   .slice(0, 14);
 }

 function applyTelMask(value: string): string {
  return value
   .replace(/\D/g, "")
   .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")
   .slice(0, 16);
 }

 const onSubmit: SubmitHandler<CreateUserFormData> = (values) => {
  saveData(values);
  navigate("/profile");
 };

 const handleChange = (field: FormFieldName, event: ChangeEvent<HTMLInputElement>) => {
  if (field === "cpf") {
   event.target.value = applyCpfMask(event.target.value);
  } else if (field === "tel") {
   event.target.value = applyTelMask(event.target.value);
  }
  form.setValue(field, event.target.value);
 };

 return (
  <form onSubmit={form.handleSubmit(onSubmit)} className="form__style">
   {Object.values(formFields).map((field) => (
    <div key={field.name}>
     <label>{field.label}</label>
     <input
      type="text"
      name={field.name}
      value={form.watch(field.name)}
      onChange={(e) => {
       handleChange(field.name, e);
       form.trigger(field.name);
      }}
      maxLength={field.name === "cpf" ? 14 : field.name === "tel" ? 14 : 30}
     />
     {form.formState.errors && (
      <small className="validation__field">
       {form.formState.errors[field.name as keyof CreateUserFormData]?.message}
      </small>
     )}
    </div>
   ))}

   <div className="button__container">
    <button type="submit" className="btn-primary">
     Cadastrar
    </button>
    <button type="button" className="btn-ghost icon_button--align">
     <span>Login</span>
     <span>
      <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
       <path d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z" />
      </svg>
     </span>
    </button>
   </div>
  </form>
 );
};

export default FormComponent;
