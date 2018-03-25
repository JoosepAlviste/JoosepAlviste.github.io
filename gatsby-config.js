module.exports = {
  siteMetadata: {
    email: 'joosep.alviste@gmail.com',
    gitHubLink: 'https://github.com/JoosepAlviste',
    linkedInLink: 'https://www.linkedin.com/in/joosep-alviste/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lato', 'Roboto Mono'],
      },
    },
  ],
}
