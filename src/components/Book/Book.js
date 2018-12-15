/* eslint-disable react/no-danger */

import React from 'react';

import Container from './Container';
import Cover from './Cover';
import Review from './Review';
import Title from './Title';
import Stars from './Stars';

const Book = ({ book, ...review }) => (
  <Container>
    <Cover src={book.image_url} href={book.link} />
    <Review>
      <Title href={book.link}>{book.title_without_series}</Title>
      <Stars rating={review.rating} />
      <p dangerouslySetInnerHTML={{ __html: review.body }} />
    </Review>
  </Container>
);

export default Book;
