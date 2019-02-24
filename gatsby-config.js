/* eslint-disable max-len */

module.exports = {
  siteMetadata: {
    title: 'stepankuzmin.com',
    author: 'Stepan Kuzmin',
    description:
      'Stepan is a software engineer and GIS specialist with 10 years of experience in solving problems with technologies.',
    siteUrl: 'https://stepankuzmin.com/',
    social: {
      twitter: 'stepankuzmin'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              showCaptions: true
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV
      }
    },
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: '51562388',
        version: 2,
        webvisor: true,
        trackHash: true
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
};
