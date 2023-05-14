import React from 'react'
import PropTypes from 'prop-types'
import {
  Player,
  Wall,
  Goal,
} from '@components'
import styles from './Game.module.css'

const Game = ({
  character,
  theme,
  json,
  w,
  h,
}) => (
  <div
    className={`${styles.game}`}
    style={{
      gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
      gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
      width: `${(w * 2 + w + 1) * 50}px`,
      height: `${(h + h + 1) * 50}px`,
    }}
  >
    {
      json.map((row) => row.map((col) => {
        switch (col) {
          case 'p':
            return <Player character={character} />
          case 'g':
            return <Goal />
          case '-':
            return <Wall theme={theme} direction="Horizontal" />
          case '|':
            return <Wall theme={theme} direction="Vertical" />
          case '+':
            return <Wall theme={theme} direction="Corner" />
          case ' ':
            return <span> </span>
          default:
            return null
        }
      }))
    }
  </div>
)

Game.propTypes = {
  character: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

export default Game
