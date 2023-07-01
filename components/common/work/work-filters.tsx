import { AutocompleteField, InputField } from "@/components/form";
import { useTagList } from "@/hooks";
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
  const { data } = useTagList({});

  const tagList = data?.data || [];

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: "",
      selectedTagList: [],
      ...initialValues,
    },
  });

  async function handleSubmitForm(payload: WorkFiltersPayload) {
    try {
      if (!payload) return;
      payload.tagList_like = payload.selectedTagList?.join("|") || "";
      delete payload.selectedTagList; //delete selected tag list value
      await onSubmit?.(payload);
    } catch (error) {
      console.log("failed", error);
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
        options={tagList}
        getOptionLabel={(option) => option}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={() => debounceSearchChange()}
      />
    </Box>
  );
}
