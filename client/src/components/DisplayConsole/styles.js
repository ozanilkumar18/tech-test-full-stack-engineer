import { Flex } from "rebass";
import styled from "styled-components";

export const PrintConsole = styled(Flex)`
  font-family: monospace !important;
  font-weight: 300;
  font-size: 16px;
  color: dimgrey;
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px #888888;
  border-radius: 2px;
  overflow-y: overlay;
  text-align: left;
  padding: 10px;
  word-wrap: break-word;
  height:100%;
`;

export const StyledPre = styled.pre`
  white-space: pre-wrap;
`;

