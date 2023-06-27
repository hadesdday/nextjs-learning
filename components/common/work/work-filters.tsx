import { AutocompleteField, InputField } from "@/components/form";
import { WorkFiltersPayload } from "@/models";
import { Search } from "@mui/icons-material";
import { Box, InputAdornment, debounce } from "@mui/material";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export interface WorkFiltersProps {
  initialValues?: WorkFiltersPayload;
  onSubmit?: (payload: WorkFiltersPayload) => void;
}

export function WorkFilters({ onSubmit, initialValues }: WorkFiltersProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: "",
      ...initialValues,
    },
  });

  async function handleSubmitForm(payload: WorkFiltersPayload) {
    try {
      await onSubmit?.(payload);
    } catch (error) {
      console.log("login failed", error);
    }
  }

  const debounceSearchChange = debounce(handleSubmit(handleSubmitForm), 350);

  return (
    <Box component={"form"} onSubmit={handleSubmit(handleSubmitForm)}>
      <InputField
        name={"search"}
        control={control}
        placeholder="Search work"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          debounceSearchChange();
        }}
      />
      <AutocompleteField
        name="selectedTagList"
        label="Filter by category"
        placeholder="Categories"
        control={control}
        options={[{ title: "easy", key: "ez" }]}
        getOptionLabel={(option) => option.key}
        isOptionEqualToValue={(option, value) => option.key === value.key}
      />
    </Box>
  );
}
