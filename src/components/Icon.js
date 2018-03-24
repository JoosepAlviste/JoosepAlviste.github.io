import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icon.module.scss'

const Icon = ({ children, viewBox, title }) => (
  <svg className={styles.Icon} viewBox={viewBox || null}>
    {title && <title>{title}</title>}
    {children}
  </svg>
)

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  viewBox: PropTypes.string,
  title: PropTypes.string,
}

Icon.defaultProps = {
  viewBox: null,
  title: null,
}

export default Icon
