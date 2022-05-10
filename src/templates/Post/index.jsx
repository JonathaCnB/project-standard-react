import React from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './styles';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);
  return (
    <Styled.Container>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className="tags">
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </Styled.Container>
  );
};

export default Post;
