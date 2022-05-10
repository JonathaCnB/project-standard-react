import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import * as Styled from './styles';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState('');
  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument('posts');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL');
    }

    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError('Por favor preencha todos os campos!');
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createBy: user.email,
    });

    navigate('/');
  };

  return (
    <Styled.Container>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="url"
            name="image"
            required
            placeholder="Insira uma imagem que represanta o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do seu post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde
          </button>
        )}

        {response.error && <p className="container error">{response.error}</p>}
        {formError && <p className="container error">{formError}</p>}
      </form>
    </Styled.Container>
  );
};

export default CreatePost;
