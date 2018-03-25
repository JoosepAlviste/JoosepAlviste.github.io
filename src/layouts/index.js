import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/Footer'
import '../styles/main.scss'

const Index = ({ children, data }) => (
  <div>
    {children()}
    <Footer email={data.site.siteMetadata.email} />
  </div>
)

Index.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({ email: PropTypes.string.isRequired }),
    }),
  }).isRequired,
}

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        email
      }
    }
  }
`

export default Index
