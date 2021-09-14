import React from "react";
import { PrintConsole, StyledPre } from "./styles";

const DisplayConsole = ({ capsules }) => (
  <PrintConsole fontSize={['12px', '18px']}>
    <StyledPre>
      {capsules.result
        ? JSON.stringify(capsules, null, 2)
        : "Nothing to Display! Press a button"}
    </StyledPre>
  </PrintConsole>
);
export default DisplayConsole;
