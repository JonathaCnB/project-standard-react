import React from 'react';
import P from 'prop-types';

const Container = ({ children }) => {
  return (
    <div>
      <h1>Esté é o titulo do container</h1>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: P.node.isRequired,
};

export default Container;
