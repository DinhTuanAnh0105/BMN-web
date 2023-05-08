import React from "react";
// import { Size, SelectStatus } from "interfaces/index";
import { FormikState, FormikHelpers, FieldInputProps } from "formik";
import { SelectStatus, Size } from "../../interfaces";

interface FieldSelectProps {
  defaultValue?: string | null | undefined;
  value?: string | null | undefined;
  size?: Size;
  open?: boolean;
  options?: { label: string; value: any }[];
  placeholder?: React.ReactNode;
  showArrow?: boolean;
  status?: SelectStatus;
  mode?: "multiple" | "tags" | undefined;
  onChange?: (value: string) => void;
  className?: string;
  form?: FormikHelpers<any> & FormikState<any>;
  field?: FieldInputProps<any>;
  label?: string;
  showSearch?: boolean;
  onSearch?: (value: string) => void;
}

export default FieldSelectProps;
