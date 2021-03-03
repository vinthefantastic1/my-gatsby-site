module.exports = {
  siteMetadata: {
    title: "Vincent's Great Gatsby Site",
    description: "My fantastic site is live!"
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/blog/`,
    },
  },

  "gatsby-plugin-mdx",

],
};
