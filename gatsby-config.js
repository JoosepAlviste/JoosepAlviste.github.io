module.exports = {
  siteMetadata: {
    email: 'joosep.alviste@gmail.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lato', 'Roboto Mono'],
      },
    },
  ],
}
