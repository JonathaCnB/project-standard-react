import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

const Message = ({ msg, type }) => {
  return (
    <Styled.Container type={type}>
      <p>{msg}</p>
    </Styled.Container>
  );
};

Message.propTypes = {
  msg: P.string.isRequired,
  type: P.string.isRequired,
};

export default Message;
