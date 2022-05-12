import React, { useContext } from 'react';
import * as Styled from './styles';
import { SomeContext } from '../../components/HookUseContext';
const Aboult = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <Styled.Content>
      <h1>Aboult</h1>
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
    </Styled.Content>
  );
};

export default Aboult;
