import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { uploads } from '../../utils/config';
import { getPhoto } from '../../slices/photoSlice';
import Message from '../../components/Message';
import PhotoItem from '../../components/PhotoItem';
import * as Styled from './styles';

const Photo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { photo, loading, error, message } = useSelector(
    (state) => state.photo,
  );

  //load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <Styled.Container>
      <h2>Photo</h2>
      <PhotoItem photo={photo} />
    </Styled.Container>
  );
};

export default Photo;
