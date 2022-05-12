import React, { useEffect, useState } from 'react';

const HookUseEffect = () => {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    console.log('sem o array execulta cada mudança do componente');
  });
  useEffect(() => {
    console.log('com o array só execulta no primeiro carregamento');
  }, []);

  const changeSomething = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Alterar</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
