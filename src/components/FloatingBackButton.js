import React from 'react'
import Link from 'gatsby-link'

import styles from './FloatingBackButton.module.scss'

const FloatingBackButton = () => (
  <Link className={styles.BackButton} to="/">
    &larr; Back
  </Link>
)

export default FloatingBackButton
