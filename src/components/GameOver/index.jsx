import P from 'prop-types';
import React from 'react';
import './index.css';
const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  );
};

GameOver.propTypes = {
  retry: P.any,
  score: P.number,
};

export default GameOver;
