import React from 'react';

import Header from '../Header';
import Container from './Container';

const Layout = (props) => {
  const { location, title, children } = props;

  const rootPath = `${__PATH_PREFIX__}/`;
  const isRoot = location.pathname === rootPath;

  return (
    <Container>
      <Header primary={isRoot}>{title}</Header>
      {children}
    </Container>
  );
};

export default Layout;
