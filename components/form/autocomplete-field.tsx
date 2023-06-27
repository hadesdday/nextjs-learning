import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { TextField } from "@mui/material";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import { Control, FieldValues, Path, useController } from "react-hook-form";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export type AutocompleteFieldProps<T, K extends FieldValues> = Partial<
  AutocompleteProps<T, boolean, boolean, boolean>
> & {
  name: Path<K>;
  control: Control<K>;

  placeholder?: string;
  label?: string;

  options: T[];
  getOptionLabel: (option: T) => string;
};

export function AutocompleteField<T, K extends FieldValues>({
  name,
  control,
  placeholder,
  label,
  options,
  getOptionLabel,
  isOptionEqualToValue,
  // onChange: externalOnChange,
  // onBlur: externalOnBlur,
  // ref: externalRef,
  // value: externalValue,
  ...props
}: AutocompleteFieldProps<T, K>) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Autocomplete
      multiple
      options={options}
      disableCloseOnSelect
      fullWidth
      size="small"
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {getOptionLabel(option) || "-"}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          margin="normal"
          label={label}
          placeholder={placeholder}
          {...params}
        />
      )}
    />
  );
}
