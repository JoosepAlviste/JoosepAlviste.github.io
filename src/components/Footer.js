import React from 'react'
import PropTypes from 'prop-types'

import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'
import CVIcon from './CVIcon'
import CopyButton from './CopyButton'
import styles from './Footer.module.scss'

const Footer = ({ email }) => (
  <div className={styles.Footer}>
    <div className={styles.Text}>
      <span>{email}</span>
      <CopyButton text={email} />
    </div>

    <div className={styles.Icons}>
      <div className={styles.Icon}>
        <a href="/">
          <CVIcon />
        </a>
      </div>

      <div className={styles.Icon}>
        <a href="https://github.com/JoosepAlviste">
          <GitHubIcon />
        </a>
      </div>

      <div className={styles.Icon}>
        <a href="https://www.linkedin.com/in/joosep-alviste/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  email: PropTypes.string.isRequired,
}

export default Footer
