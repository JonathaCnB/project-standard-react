import P from 'prop-types';
import React from 'react';
import './index.css';
const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar o jogo</button>
    </div>
  );
};

Game.propTypes = {
  verifyLetter: P.any,
};

export default Game;
