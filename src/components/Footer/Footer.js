import React from 'react';
import Container from './Container';
import Link from './Link';

const Footer = () => (
  <Container>
    <Link href='https://twitter.com/stepankuzmin'>twitter</Link>
    {' • '}
    <Link href='https://github.com/stepankuzmin'>github</Link>
  </Container>
);

export default Footer;
