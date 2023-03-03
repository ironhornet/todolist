import { FieldInputProps } from 'formik';

export interface ITextAreaProps {
  id: string;
  value?: string;
  handleChange?: (value: string) => void;
  getFieldProps?: (nameOrOptions: string) => FieldInputProps<string>;
}
