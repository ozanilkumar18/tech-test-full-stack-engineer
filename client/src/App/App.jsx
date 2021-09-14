import { hot } from "react-hot-loader/root";
import React from "react";
import GlobalStyle from "../theme";
import { Application } from "./styles";
import { SpaceAirportContainer } from "../containers/SpaceAirportContainer";

const App = () => (
  <>
    <Application>
      <SpaceAirportContainer />
    </Application>
    <GlobalStyle></GlobalStyle>
  </>
);

export default hot(App);
