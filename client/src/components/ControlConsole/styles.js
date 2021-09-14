import { Flex, Button } from "rebass";
import styled from "styled-components";

export const MainControl = styled(Flex)`
  border: 1px solid black;
  box-shadow: 2px 2px #888888;
  border-radius: 2px;
  background-color: white;
  height: 100%;
`;

export const FlightNumberInput = styled.input`
  border: 2px solid #eee;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  width: 75%;
  overflow: auto;
  padding: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 5px;
  :valid {
    background-color: #b5de9c;
  }
`;

export const FancyButton = styled(Button)`
  color: white;
  width: -webkit-fill-available;
  fontSize: 0.85rem;
  padding: 10px 5px;
  cursor: pointer;
  background-color: #B5DE9C;
  :disabled: {
    backgroundColor: #B5DE9C;
`;
