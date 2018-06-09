module.exports = {
  siteMetadata: {
    title: 'Coding Terror',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
    'gatsby-transformer-remark',
  ],
}
