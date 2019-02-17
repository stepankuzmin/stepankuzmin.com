/* eslint-disable react/no-danger */

import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const DefaultTemplate = (props) => {
  const { data, location } = props;

  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1)
        }}
      >
        {`${post.frontmatter.date} • ${post.timeToRead} min read`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1)
        }}
      />
      <Bio />
    </Layout>
  );
};

export default DefaultTemplate;
