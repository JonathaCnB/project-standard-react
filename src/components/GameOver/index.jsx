import P from 'prop-types';
import React from 'react';
import './index.css';
const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  );
};

GameOver.propTypes = {
  retry: P.any,
};

export default GameOver;
