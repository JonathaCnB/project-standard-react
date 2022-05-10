import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import * as Styled from './styles';

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <Styled.Container>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className="search_form">
        <input
          type="text"
          name="search"
          placeholder="Ou busque por tags ..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <Styled.Content>
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map((post) => (
            <h3 key={post.id}>
              <PostDetail post={post} />
            </h3>
          ))}
        {posts && posts.length === 0 && (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
