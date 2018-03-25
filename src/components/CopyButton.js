import React from 'react'
import PropTypes from 'prop-types'

import { copyToClipboard } from '../utils/clipboard'
import Icon from './Icon'
import styles from './CopyButton.module.scss'

class CopyButton extends React.Component {
  constructor() {
    super()

    this.state = {
      showCopiedNotification: true,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { text } = this.props

    const success = copyToClipboard(text)

    if (success) {
      this.setState({ showCopiedNotification: true })

      setTimeout(() => {
        // Timeout duration comes from the SCSS animation
        this.setState({ showCopiedNotification: false })
      }, 750)
    }
  }

  render() {
    const { showCopiedNotification } = this.state

    return (
      <span className={styles.CopyButtonContainer}>
        <Icon
          className={styles.CopyButton}
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          title="Copy button"
          inline
          onClick={this.handleClick}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </Icon>

        {showCopiedNotification && (
          <span className={styles.CopiedNotification}>Copied!</span>
        )}
      </span>
    )
  }
}

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CopyButton
