import React, { useEffect, useState } from 'react'
import { Game } from '@components'
import { navigate } from '@store'
import styles from './Maze.module.css'

const Maze = ({ configForm }) => {
  const {
    width, height, player, theme, time, limitTime,
  } = configForm
  const [mazeLayout, setMazeLayout] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [timeLimit, setTimeLimit] = useState(limitTime)

  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return response.json()
  }

  const loadMaze = async () => {
    const maze = await getMaze(width, height)
    setMazeLayout(maze)
  }

  const navigateGameOver = () => (gameOver ? navigate('/gameover') : null)

  useEffect(() => {
    loadMaze()
    console.log(width)
  }, [configForm])

  useEffect(() => {
    navigateGameOver()
  }, [gameOver])

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLimit > 0) setTimeLimit((prevTime) => prevTime - 1)
    }, 1000)

    if (timeLimit === 0) {
      setGameOver(true)
    }

    return () => clearInterval(timer)
  }, [timeLimit])

  if (!mazeLayout) {
    return 'Loading...'
  }

  const minutes = Math.floor(timeLimit / 60)
  const seconds = timeLimit % 60
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return (
    <div className={styles.maze}>
      {
      timeLimit > 0 ? <span className={styles.time}>{formattedTime}</span> : null
    }
      <Game
        character={player}
        theme={theme}
        json={mazeLayout}
        w={parseInt(width)}
        h={parseInt(height)}
        setGameOver={setGameOver}
      />
    </div>
  )
}

export default Maze
