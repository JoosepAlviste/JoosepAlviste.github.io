import React from 'react'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'

import Icon from './Icon'
import styles from './IndexHeader.module.scss'

const IndexHeader = ({ scrollDownTo }) => (
  <header className={styles.Header}>
    <div className={styles.HeaderContainer}>
      <h1 className={styles.Title}>Joosep Alviste</h1>
      <h2 className={styles.Subtitle}>Full-stack web developer</h2>
    </div>

    <div className={styles.HeaderBottom}>
      <ScrollLink to={scrollDownTo} duration={500} smooth>
        <Icon
          viewBox="0 0 70 37"
          title="Scroll down"
          width="70px"
          height="37px"
          className={styles.ScrollDownIcon}
        >
          <path d="M4.80817793,0.807342302 C3.70772401,-0.268845842 1.92518401,-0.268845842 0.824730092,0.807342302 C-0.274095935,1.88192179 -0.275723825,3.62730914 0.824730092,4.70349729 L33.0081235,36.1928589 C34.1085774,37.269047 35.8911174,37.269047 36.9915713,36.1928589 L69.1749648,4.70349729 C70.2746047,3.62730914 70.2754187,1.88353045 69.1749648,0.807342302 C68.0745108,-0.268845842 66.2919708,-0.268845842 65.1915169,0.80573365 L34.9998474,29.5241923 L4.80817793,0.807342302 Z" />
        </Icon>
      </ScrollLink>
    </div>
  </header>
)

IndexHeader.propTypes = {
  scrollDownTo: PropTypes.string.isRequired,
}

export default IndexHeader
