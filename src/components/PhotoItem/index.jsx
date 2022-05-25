import P from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { uploads } from '../../utils/config';
import * as Styled from './styles';

const PhotoItem = ({ photo }) => {
  return (
    <Styled.Container>
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <div className="photo-author">
        Publicada por:
        <Link to={`/users/${photo.userId}`}> {photo.userName}</Link>
      </div>
    </Styled.Container>
  );
};

PhotoItem.propTypes = {
  photo: P.any,
};

export default PhotoItem;
