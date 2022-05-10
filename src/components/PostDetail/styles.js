import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 2em;

  img {
    max-width: 600px;
  }

  h2 {
    margin-bottom: 0.4em;
  }

  .createdby {
    font-style: italic;
    color: #444;
    font-size: 0.8em;
    margin-bottom: 1em;
  }

  .tags {
    margin-bottom: 1.2em;
    display: flex;
  }

  .tags p {
    margin-right: 0.5em;
  }

  .tags span {
    font-weight: bold;
  }
`;
