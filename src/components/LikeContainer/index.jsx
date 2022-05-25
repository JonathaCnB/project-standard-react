import P from 'prop-types';
import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import * as Styled from './styles';

const LikeContainer = ({ photo, user, handleLike }) => {
  return (
    <Styled.Container>
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </Styled.Container>
  );
};

LikeContainer.propTypes = {
  photo: P.any,
  user: P.any,
  handleLike: P.any,
};

export default LikeContainer;
