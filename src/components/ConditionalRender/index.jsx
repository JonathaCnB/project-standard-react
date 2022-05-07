import React, { useState } from 'react';

const ConditionalRender = () => {
  const [x, setX] = useState(false);
  const [name] = useState('João');
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se X for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <button onClick={() => setX(!x)}>Alterar valor de X</button>
      <h1>if ternário</h1>
      {name == 'João' ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
