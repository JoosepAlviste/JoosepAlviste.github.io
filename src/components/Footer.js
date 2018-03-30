import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby-link'

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
        <a
          href={withPrefix('/files/CV Joosep Alviste.pdf')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CVIcon />
        </a>
      </div>

      <div className={styles.Icon}>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>

      <div className={styles.Icon}>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
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
