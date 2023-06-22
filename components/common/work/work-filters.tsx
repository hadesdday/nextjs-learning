import { InputField } from "@/components/form";
import { WorkFiltersPayload } from "@/models";
import { Search } from "@mui/icons-material";
import { Box, InputAdornment, debounce } from "@mui/material";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export interface WorkFiltersProps {
  onSubmit?: (payload: WorkFiltersPayload) => void;
}

export function WorkFilters({ onSubmit }: WorkFiltersProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: "",
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
    </Box>
  );
}
