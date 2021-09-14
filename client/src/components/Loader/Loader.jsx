import React from 'react';
import { LoaderWrapper, RadarSpinner } from "./styles";

const Loader = ({color}) => {
  return (
    <LoaderWrapper>
      <RadarSpinner color={color}/>
    </LoaderWrapper>
  );
};

export default Loader;
