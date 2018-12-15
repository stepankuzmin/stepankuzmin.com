import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

const Container = styled.a`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  cursor: pointer;
  box-shadow: none;

  img {
    min-width: 100px;
  }
`;

export default ({ link, ...props }) => (
  <Container href={link}>
    <img {...props} alt='cover' />
  </Container>
);
