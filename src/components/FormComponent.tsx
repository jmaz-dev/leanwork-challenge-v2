import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "../interfaces/form-request";

interface Props {
 formFields: FormFields;
}

const FormComponent: React.FC<Props> = ({ formFields }) => {
 const navigate = useNavigate();
 type CreateUserFormData = z.infer<typeof formSchema>;

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
   .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
   .slice(0, 15);
 }

 const onSubmit: SubmitHandler<CreateUserFormData> = (values) => {
  localStorage.setItem("user", JSON.stringify(values));
  navigate("/profile");
 };

 const handleChange = (field, event: ChangeEvent<HTMLInputElement>) => {
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
       handleChange(field.name, e), form.trigger(field.name);
      }}
      maxLength={field.name === "cpf" ? 14 : field.name === "tel" ? 14 : 30}
     />
     {form.formState.errors && (
      <small className="validation__field">{form.formState.errors[field.name]?.message}</small>
     )}
    </div>
   ))}

   <div>
    <button type="submit" className="btn-primary">
     Cadastrar
    </button>
    <button type="button">Login</button>
   </div>
  </form>
 );
};

export default FormComponent;
