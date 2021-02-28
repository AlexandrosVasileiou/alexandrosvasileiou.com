/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Alexandros Vasileiou",
    author: "Alexandros Vasileiou",
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        exclude: /(node_modules|.cashe|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: true, // this is usually false on default, but I prefer to handle the errors first
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
