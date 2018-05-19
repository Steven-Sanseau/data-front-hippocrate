// gatsby-config.js

let activeEnv = process.env.ACTIVE_ENV

if (!activeEnv) {
  activeEnv = 'development'
}

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

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
        apiURL: process.env.API_URL,
        contentTypes: ['detail', 'step', 'principle', 'supporter', 'team'],
      },
    },
  ],
}
