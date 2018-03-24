import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icon.module.scss'

const Icon = ({
  children,
  viewBox,
  title,
  width,
  height,
  inline,
  hoverScale,
  className,
}) => (
  <svg
    className={`${styles.Icon} ${inline && styles.IsInline} ${hoverScale &&
      styles.HasHoverScale} ${className}`}
    viewBox={viewBox || null}
    width={width}
    height={height}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
)

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  viewBox: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  inline: PropTypes.bool,
  hoverScale: PropTypes.bool,
  className: PropTypes.string,
}

Icon.defaultProps = {
  viewBox: null,
  title: null,
  width: '33px',
  height: '33px',
  inline: false,
  hoverScale: false,
  className: '',
}

export default Icon
