import React from 'react'
import PropTypes from 'prop-types'

import '../styles/main.scss'

const Index = ({ children }) => <div>{children()}</div>

Index.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Index
