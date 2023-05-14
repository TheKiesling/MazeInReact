import React from 'react'
import PropTypes from 'prop-types'
import styles from './Wall.module.css'

const Wall = ({
  theme,
  direction,
}) => {
  const wall = () => `../../../${theme}${direction}.png`

  return (
    <img
      src={wall()}
      alt=""
      className={`${styles.wall}`}
    />
  )
}

Wall.propTypes = {
  theme: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}

export default Wall
