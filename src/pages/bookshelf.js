/* eslint-disable react/no-danger */

import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Separator from '../components/Separator';
import Layout from '../components/Layout';
import Book from '../components/Book';
import SEO from '../components/seo';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGoodreadsShelf(filter: { name: { eq: "read" } }) {
      edges {
        node {
          reviews {
            rating
            body
            date_added
            book {
              id
              link
              image_url
              title_without_series
            }
          }
        }
      }
    }
  }
`;

const Bookshelf = (props) => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;

  const reviews = data.allGoodreadsShelf.edges[0].node.reviews.sort(
    (a, b) => a.date_added - b.date_added
  );

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Bookshelf' />
      <h1>Bookshelf</h1>
      {reviews.map(review => (
        <Book key={review.book.id} {...review} />
      ))}
      <Separator />
      <Bio />
    </Layout>
  );
};

export default Bookshelf;
