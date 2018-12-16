import React from 'react';

import Link from './Link';
import Primary from './Primary';
import Secondary from './Secondary';

const Header = ({ primary, children }) => {
  const Container = primary ? Primary : Secondary;

  return (
    <Container>
      <Link to='/'>{children}</Link>
    </Container>
  );
};

export default Header;
