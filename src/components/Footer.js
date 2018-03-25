import React from 'react'
import PropTypes from 'prop-types'

import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'
import CVIcon from './CVIcon'
import CopyButton from './CopyButton'
import styles from './Footer.module.scss'

const Footer = ({ email, gitHubLink, linkedInLink }) => (
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
        <a href={gitHubLink}>
          <GitHubIcon />
        </a>
      </div>

      <div className={styles.Icon}>
        <a href={linkedInLink}>
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
}

export default Footer
