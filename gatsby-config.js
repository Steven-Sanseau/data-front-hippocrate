module.exports = {
  siteMetadata: {
    title: `Hippocratic Oath for Data Scientist`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: ['detail', 'step', 'principle', 'supporter'],
      },
    },
  ],
}
