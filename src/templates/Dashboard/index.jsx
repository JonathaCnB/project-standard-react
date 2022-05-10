import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import * as Styled from './styles';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Styled.Container>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className="noposts">
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <>
          <div className="post_header">
            <span>Titúlo</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div className="post_row" key={post.id}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-outline btn-danger"
                    onClick={() => deleteDocument(post.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </Styled.Container>
  );
};

export default Dashboard;
