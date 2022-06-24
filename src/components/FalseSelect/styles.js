import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { Grid } from "@mui/material";

export const StyledSelect = styled(FormControl)`
  width: 100% !important;
  margin: 0 !important;
  background-color: var(--grey-2);
  /* border: 1.2182px solid var(--grey-2); */
  border-radius: 4px;
  #demo-simple-select-helper-label {
    font-weight: 400;
    color: var(--grey-0);
  }

  div {
    color: var(--grey-0);
  }

  svg {
    color: var(--grey-1);
  }
`;

export const StyledError = styled(Grid)`
  width: 100%;
  .error {
    color: var(--color-primary-negative);
    margin-top: 10px;
    font-size: 19px;
  }
`;
