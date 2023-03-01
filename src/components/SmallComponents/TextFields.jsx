import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../utils";
import ErrorMessage from "./ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors, type }) => {
  return (
    <FormControl
      fullWidth
      sx={{
        mb: "1rem",
        "&:hover  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root": {
          backgroundColor: "#fff",
        },
        "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root ": {
          backgroundColor: "#fff",
        },
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...addErrorIntoField(errors[name])}
            required
            label={label}
            variant="filled"
            InputProps={inputProps}
            type={type}
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default TextFields;
