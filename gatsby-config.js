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
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lato', 'Roboto Mono'],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              backgroundColor: '#000',
            },
          },
        ],
      },
    },
  ],
}
