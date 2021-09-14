import React from "react";
import { Box } from "rebass";
import { MainControl, FlightNumberInput, FancyButton } from "./styles";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";

const ControlConsole = ({
  capsulesCallback,
  handleTextInput,
  isInputValid,
  landingPadCallback,
}) => {
  return (
    <MainControl flexWrap="wrap" alignItems="center">
      <Box px={2} py={2} width={[1, 1 / 4]}>
        <FancyButton
          fontSize={[1, 5]}
          onClick={capsulesCallback}
        >
          Capsules
        </FancyButton>
      </Box>
      <Box px={2} py={2} width={[1, 1 / 4]} pl="12%">
        <Rocket fill="#173477" />
      </Box>
      <Box px={2} py={2} width={[1, 1 / 4]}>
        <FlightNumberInput
          maxlength="15"
          size="15"
          id="flightNumber"
          name="flightNumber"
          type="text"
          placeholder="text"
          onChange={handleTextInput}
        />
      </Box>
      <Box px={2} py={2} width={[1, 1 / 4]}>
        <FancyButton
          fontSize={[1, 5]}
          onClick={landingPadCallback}
          disabled={!isInputValid}
        >
          Landing Pad
        </FancyButton>
      </Box>
    </MainControl>
  );
};

export default ControlConsole;
