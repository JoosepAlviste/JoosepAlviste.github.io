import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/Footer'
import '../styles/main.scss'
import Head from '../components/Head'

const Index = ({ children, data }) => (
  <div>
    <Head
      siteTitle={data.site.siteMetadata.title}
      siteDescription={data.site.siteMetadata.description}
    />

    <main aria-label="Content">{children()}</main>

    <Footer
      email={data.site.siteMetadata.email}
      gitHubLink={data.site.siteMetadata.gitHubLink}
      linkedInLink={data.site.siteMetadata.linkedInLink}
    />
  </div>
)

Index.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        email: PropTypes.string.isRequired,
        gitHubLink: PropTypes.string.isRequired,
        linkedInLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        email
        gitHubLink
        linkedInLink
        description
        title
      }
    }
  }
`

export default Index
