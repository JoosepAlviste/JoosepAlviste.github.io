import React from 'react'

import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'
import CVIcon from './CVIcon'
import styles from './Footer.module.scss'

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.Text}>
      <span>joosep.alviste@gmail.com</span>
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

export default Footer
