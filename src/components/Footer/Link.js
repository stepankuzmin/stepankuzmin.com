import React from 'react';

const Link = ({ children, ...props }) => (
  <a target='_blank' rel='noopener noreferrer' {...props}>
    {children}
  </a>
);

export default Link;
