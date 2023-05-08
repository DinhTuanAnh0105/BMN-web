import { Select as SelectAntd } from "antd";
import { ErrorMessage } from "formik";
import { FunctionComponent } from "react";
import FieldSelectProps from "./Select.interface";

const Select: FunctionComponent<FieldSelectProps> = ({
  defaultValue,
  value,
  size,
  open,
  options,
  placeholder,
  showArrow,
  status,
  onChange,
  className,
  form,
  field,
  mode,
  label,
  showSearch,
  onSearch,
}) => {
  const { errors, touched, setFieldValue = () => {} } = form ?? {};
  const onBlur = () => {
    form?.setTouched({ ...form.touched, [field?.name || ""]: true });
  };

  const handleOnChange = (e: any) => {
    setFieldValue(field?.name || "", e);
  };

  const inputOnChange = onChange || handleOnChange;

  return (
    <div>
      <label>{label}</label>
      <SelectAntd
        showSearch={showSearch}
        defaultValue={defaultValue}
        value={value}
        size={size}
        open={open}
        mode={mode}
        options={options}
        placeholder={placeholder}
        showArrow={showArrow}
        status={status}
        onChange={inputOnChange}
        onSearch={onSearch}
        // className={className}
        className={`custom-select ${className}`}
        onBlur={onBlur}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
      />
      {field && touched?.[field?.name || ""] && errors?.[field?.name || ""] && (
        <span className="span_error">
          <ErrorMessage name={field?.name || ""} className="span_error" />
        </span>
      )}
    </div>
  );
};

export default Select;
