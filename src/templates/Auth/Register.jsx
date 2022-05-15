import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './styles';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.Container>
      <Styled.Register>
        <h2>ReactGram</h2>
        <p className="subtitle">
          Cadastra-se para ver as fotos dos seus amigos.
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirme a senha" />
          <input type="submit" value="Cadastrar" />
        </form>
        <p>
          Já tem conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </Styled.Register>
    </Styled.Container>
  );
};

export default Register;
