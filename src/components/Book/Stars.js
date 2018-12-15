import React from 'react';

const starsCount = 5;
const Stars = ({ rating }) => {
  const stars = Array(starsCount)
    .fill('★', 0, rating)
    .fill('☆', rating, starsCount)
    .join(' ');

  return <div>{stars}</div>;
};

export default Stars;
