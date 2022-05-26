import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage';
import { useQuery } from '../../hooks/useQuery';
import LikeContainer from '../../components/LikeContainer';
import PhotoItem from '../../components/PhotoItem';
import Message from '../../components/Message';
import { searchPhotos, like } from '../../slices/photoSlice';
import * as Styled from './styles';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch);
  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  // Load photos
  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  // Like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id));
    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Styled.Container id="search">
      <h2>Você está buscando por: {search}</h2>
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver Mais
            </Link>
          </div>
        ))}
      {photos.length === 0 && (
        <h2 className="no-photos">
          Ainda não há fotos publicadas
          <Link to={`/users/${user._id}`}> Click aqui</Link>
        </h2>
      )}
    </Styled.Container>
  );
};

export default Search;
