import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { useAuthemtication } from '../../hooks/useAuthentication';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, error: authError, loading } = useAuthemtication();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password,
    };
    login(user);
    setEmail('');
    setPassword('');
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <Styled.Container>
      <h2>Entrar</h2>
      <p>Faça login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde
          </button>
        )}

        {error && <p className="container error">{error}</p>}
      </form>
    </Styled.Container>
  );
};

export default Login;
