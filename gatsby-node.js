const fs = require('fs');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const pagesQuery = `
  {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
            template
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const templatesPath = './src/templates/';
const templates = fs.readdirSync(templatesPath).reduce((acc, fileName) => {
  const templatePath = path.resolve(path.join(templatesPath, fileName));
  const templateName = path.parse(templatePath).name;

  acc[templateName] = templatePath;
  return acc;
}, {});

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(pagesQuery);
  if (result.errors) {
    throw result.errors;
  }

  const pages = result.data.allMarkdownRemark.edges;
  pages.forEach((page) => {
    const { slug, template } = page.node.fields;
    const templateComponent = templates[template];

    if (!templateComponent) {
      throw new Error(`Couldn't find template ${template} for ${slug}`);
    }

    createPage({
      path: slug,
      component: templateComponent,
      context: {
        slug
      }
    });

    createRedirect({
      fromPath: path.join('/all', slug),
      toPath: slug,
      isPermanent: true
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value
    });

    // add `template` frontmatter field to node
    createNodeField({
      name: 'template',
      node,
      value: node.frontmatter.template
    });
  }
};
