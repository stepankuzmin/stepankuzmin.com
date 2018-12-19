/* eslint-disable react/no-danger */

import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import { rhythm } from '../utils/typography';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

const BlogIndex = (props) => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title='All posts'
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4)
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>
              {`${node.frontmatter.date} • ${node.timeToRead} min read`}
            </small>
            <p>{node.frontmatter.description}</p>
          </div>
        );
      })}
      <Footer />
    </Layout>
  );
};

export default BlogIndex;
