import { Input as InputAntd } from "antd";
import { ErrorMessage } from "formik";
import InputProps from "./interface";

const Input = ({
  name,
  size,
  type,
  value,
  onChange,
  placeholder,
  className,
  form,
  onBlur,
  disabled,
  label,
  isRequied,
  ...props
}: InputProps<any, any>) => {
  const inputName = name || props?.field?.name || "";
  const inputValue = value || props.field?.value;
  const inputOnChange = onChange || props.field?.onChange;
  const inputOnBlur = onBlur || props.field?.onBlur;
  const { errors, touched } = form ?? {};
  return (
    <div className="wrap-input">
      {label ? `${label}${isRequied ? `(*)` : ""}` : ""}
      <InputAntd
        name={inputName}
        disabled={disabled}
        size={size}
        type={type}
        value={inputValue}
        onChange={inputOnChange}
        onBlur={inputOnBlur}
        placeholder={placeholder}
        className={`custom-input ${className}`}
      />
      {touched?.[inputName] && errors?.[inputName] && (
        <span className="span_error">
          <ErrorMessage name={inputName || ""} />
        </span>
      )}
    </div>
  );
};

export default Input;
