import P from 'prop-types';
import React from 'react';
import './index.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

StartScreen.propTypes = {
  startGame: P.any,
};

export default StartScreen;
