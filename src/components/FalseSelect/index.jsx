import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { StyledError, StyledSelect } from "./styles";
import { RiErrorWarningFill } from "react-icons/ri";

const FalseSelect = ({ label, selectOptions, register, name, error }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <StyledError>
      <StyledSelect sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          {...register(name)}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label={label}
          onChange={handleChange}
        >
          {selectOptions.map((item, index) => (
            <MenuItem key={index} value={item[0]}>
              {item[1]}
            </MenuItem>
          ))}
        </Select>
      </StyledSelect>

      {error?.message && (
        <div className="error">
          <RiErrorWarningFill /> {error.message}
        </div>
      )}
    </StyledError>
  );
};

export default FalseSelect;
