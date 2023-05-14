import React from 'react'
import PropTypes from 'prop-types'
import styles from './Player.module.css'

const Player = ({
  character,
  position = 'Right',
}) => {
  const player = () => `../../../${character}${position}.png`

  return (
    <img
      src={player()}
      alt=""
      className={`${styles.player}`}
    />
  )
}

Player.propTypes = {
  character: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Player
