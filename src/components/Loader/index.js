import React from 'react';

import loader from '../../assets/loader.svg';
import { LoaderContainer } from './styles';

function Loader() {
  return (
    <LoaderContainer>
      <img src={loader} alt="loader" />
    </LoaderContainer>
  );
}

export default Loader;
