import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = ({ siteTitle, siteDescription }) => (
  <Helmet titleTemplate={`%s | ${siteTitle}`} defaultTitle={siteTitle}>
    <html lang="en" dir="ltr" />
    <meta name="description" content={siteDescription} />

    {/* To run web application in full-screen */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <meta name="theme-color" content="#ffffff" />
  </Helmet>
)

Head.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}

export default Head
