import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

export const StyledSelect = styled(FormControl)`
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
