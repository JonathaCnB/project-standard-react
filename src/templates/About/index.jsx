import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

const About = () => {
  return (
    <Styled.Container>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Esse projeto consiste em um blog feito com React no front-end e FireBase
        no back-end
      </p>
      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </Styled.Container>
  );
};

export default About;
