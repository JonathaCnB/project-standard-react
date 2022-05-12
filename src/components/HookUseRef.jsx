import React, { useState, useEffect, useRef } from 'react';

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const inputRef = useRef();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    inputRef.current.focus();
  };

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });
  return (
    <div>
      <h1>HookUseRef</h1>
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p> Counter1: {numberA}</p>
      <button onClick={() => setNumberA(numberA + 1)}>Contador1!</button>
      <p> Counter2: {numberB}</p>
      <button onClick={() => setNumberB(numberB + 1)}>Contador2!</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          data-id={numberRef.current}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
