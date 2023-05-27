import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Player,
  Wall,
  Goal,
  Way,
} from '@components'
import styles from './Game.module.css'

const Game = ({
  character,
  theme,
  json,
  w,
  h,
  setGameOver,
}) => {
  const [position, setPosition] = useState('Right')
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 })

  const movePlayer = (x, y) => {
    if (json[y][x] === ' ' || json[y][x] === 'p') setPlayerPosition({ x, y })

    if (json[y][x] === 'g') setGameOver(true)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log('Hey')
      switch (event.key) {
        case 'ArrowUp':
          movePlayer(playerPosition.x, playerPosition.y - 1)
          setPosition('Up')
          break
        case 'ArrowDown':
          movePlayer(playerPosition.x, playerPosition.y + 1)
          setPosition('Down')
          break
        case 'ArrowLeft':
          movePlayer(playerPosition.x - 1, playerPosition.y)
          setPosition('Left')
          break
        case 'ArrowRight':
          movePlayer(playerPosition.x + 1, playerPosition.y)
          setPosition('Right')
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [playerPosition])

  return (
    <div
      className={`${styles.game}`}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
        gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
        width: `${(w * 2 + w + 1) * 50}px`,
        height: `${(h + h + 1) * 50}px`,
      }}
    >
      {json.map((row, rowIndex) => row.map((col, colIndex) => {
        if (rowIndex === playerPosition.y && colIndex === playerPosition.x) {
          return <Player key={`${rowIndex}.${colIndex}`} character={character} position={position} />
        }
        switch (col) {
          case 'g':
            return <Goal key={`${rowIndex}.${colIndex}`} />
          case '-':
            return <Wall key={`${rowIndex}.${colIndex}`} theme={theme} direction="Horizontal" />
          case '|':
            return <Wall key={`${rowIndex}.${colIndex}`} theme={theme} direction="Vertical" />
          case '+':
            return <Wall key={`${rowIndex}.${colIndex}`} theme={theme} direction="Corner" />
          case ' ':
            return <Way key={`${rowIndex}.${colIndex}`} />
          default:
            return <Way key={`${rowIndex}.${colIndex}`} />
        }
      }))}
    </div>
  )
}

Game.propTypes = {
  character: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  setGameOver: PropTypes.func.isRequired,
}

export default Game
