import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/Footer'
import '../styles/main.scss'

const Index = ({ children }) => (
  <div>
    {children()}
    <Footer />
  </div>
)

Index.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Index
