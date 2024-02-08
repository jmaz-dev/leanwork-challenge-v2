import { Validation } from "./validation";

interface FormField {
 name: string;
 label: string;
 validation: Validation;
}
export interface FormFields {
 [index: number]: FormField;
}
