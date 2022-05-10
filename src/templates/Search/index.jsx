import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { useQuery } from '../../hooks/useQuery';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <Styled.Container>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </Styled.Container>
  );
};

export default Search;
