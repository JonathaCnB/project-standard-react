import P from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

const PostDetail = ({ post }) => {
  return (
    <Styled.Container>
      <img src={post.image} alt={post.title}></img>
      <h2>{post.title}</h2>
      <p className="createdby">{post.createBy}</p>
      <div className="tags">
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}/`} className="btn btn-outline">
        Ler
      </Link>
    </Styled.Container>
  );
};

PostDetail.propTypes = {
  post: P.any.isRequired,
};

export default PostDetail;
