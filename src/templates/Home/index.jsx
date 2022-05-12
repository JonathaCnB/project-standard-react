import React, { useContext } from 'react';
import * as Styled from './styles';
import HookUseReduce from '../../components/HookUseReduce';
import HookUseEffect from '../../components/HookUseEffect';
import { SomeContext } from '../../components/HookUseContext';
import HookUseRef from '../../components/HookUseRef';
const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <Styled.Content>
      <HookUseReduce />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
    </Styled.Content>
  );
};

export default Home;
