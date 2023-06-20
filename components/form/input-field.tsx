import { TextField, TextFieldProps } from "@mui/material";
import { Control, useController } from "react-hook-form";

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

export function InputField({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  ...props
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <TextField
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      name={name}
      label={label}
      aria-required="true"
      aria-label={error?.message}
      fullWidth
      size="small"
      margin="normal"
      {...props}
    />
  );
}
