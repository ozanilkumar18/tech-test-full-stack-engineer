import React, { useState } from "react";
import { Flex, Box } from "rebass";
import { useSelector, useDispatch } from "react-redux";
import { ControlConsole } from "../../components/ControlConsole";
import { DisplayConsole } from "../../components/DisplayConsole";
import { fetchCapsules, loadLaunchingPad } from "../../redux/thunk";
import { Loader } from "../../components/Loader";
import {
  getCapsules,
  getField,
  isCapsulesFetching,
  isLandingPadFetching,
} from "../../redux/selectors";
import { setFieldValue } from "../../redux/actions";

const SpaceAirportContainer = () => {
  const [isInputValid, setIsInputValid] = useState(false);
  const dispatch = useDispatch();

  const capsules = useSelector((state) => getCapsules(state));
  const LandingPadInput = useSelector((state) =>
    getField("dashboard", "landingPadId")(state)
  );
  const isCapsulesLoading = useSelector((state) => isCapsulesFetching(state));
  const isLandingPadLoading = useSelector((state) =>
    isLandingPadFetching(state)
  );

  const handleTextInput = (event) => {
    const input = event.target.value;
    const format = /[#$%&]/;
    if (!format.test(input)) {

      setIsInputValid(true);
      dispatch(setFieldValue("dashboard", "landingPadId", input));
    } else {
      setIsInputValid(false);
    }
  };

  const loadCapsulesFromAPI = () => dispatch(fetchCapsules());
  const loadLaunchingPadFromAPI = () =>
    dispatch(loadLaunchingPad(LandingPadInput));

  return (
    <Box>
      {(isCapsulesLoading || isLandingPadLoading) && <Loader color="red" />}
      <Flex flexWrap="wrap" alignItems="center" p={[1, 3]}>
        <Box px={2} py={2} width={[2 / 3, 1]} height={["100vh", "63vh"]}>
          <DisplayConsole capsules={capsules} />
        </Box>
        <Box px={2} py={2} width={[1 / 3, 1]} height={["100vh", "32vh"]}>
          <ControlConsole
            capsulesCallback={loadCapsulesFromAPI}
            handleTextInput={handleTextInput}
            isInputValid={isInputValid}
            landingPadCallback={loadLaunchingPadFromAPI}
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default SpaceAirportContainer;
