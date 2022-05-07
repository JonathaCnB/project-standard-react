import React, { useState } from 'react';
import './index.css';
import P from 'prop-types';

const MyForms = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [textBio, setTextBio] = useState('');
  const [role, setRole] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('enviado');
    console.log(name, email, textBio, role);

    setName('');
    setEmail('');
    setTextBio('');
    setRole('');
  };

  return (
    <div>
      <h1>MyForm</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            value={textBio}
            onChange={(e) => setTextBio(e.target.value)}
            placeholder="Descrição do usuário"
          ></textarea>
        </label>
        <label>
          <span>Função:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Adminstrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

MyForms.propTypes = {
  user: P.object,
};

export default MyForms;
