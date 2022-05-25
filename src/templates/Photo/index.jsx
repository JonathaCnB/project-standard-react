import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { uploads } from '../../utils/config';
import { getPhoto, like, comment } from '../../slices/photoSlice';
import Message from '../../components/Message';
import PhotoItem from '../../components/PhotoItem';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';
import * as Styled from './styles';
import LikeContainer from '../../components/LikeContainer';

const Photo = () => {
  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch);
  const { id } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo,
  );

  //Comments
  const [commentText, setCommentText] = useState('');

  //load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  const handleLike = () => {
    dispatch(like(photo._id));
    resetMessage();
  };

  const handleComment = (e) => {
    e.preventDefault();
    const commentData = {
      comment: commentText,
      id: photo._id,
    };
    dispatch(comment(commentData));

    setCommentText('');
    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <Styled.Container>
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="message-container">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comentários: ({photo.comments.length})</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira o seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ''}
              />
              <input type="submit" value="Comentar" />
            </form>
            {photo.comments.length === 0 && <p>Sem comentários no momento.</p>}
            {photo.comments.map((comment) => (
              <div className="comment" key={comment.comment}>
                <div className="author">
                  {comment.userImage && (
                    <img
                      src={`${uploads}/users/${comment.userImage}`}
                      alt={`${comment.userName}`}
                    />
                  )}
                  <Link to={`/users/${comment.userId}`}>
                    <p>{comment.userName}</p>
                  </Link>
                </div>
                <p>{comment.comment}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </Styled.Container>
  );
};

export default Photo;
