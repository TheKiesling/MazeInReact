import React, { useEffect, useState } from 'react'
import {
  Game,
} from '@components'
import styles from './Maze.module.css'

const Maze = () => {
  const [mazeLayout, setMazeLayout] = useState(null)

  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return response.json()
  }

  const loadMaze = async () => {
    const maze = await getMaze(2, 2)
    setMazeLayout(maze)
  }

  useEffect(() => {
    loadMaze()
  }, [])

  if (!mazeLayout) {
    return 'Loading...'
  }

  return (
    <div className={`${styles.maze}`}>
      <Game
        character="rick"
        theme="rock"
        json={mazeLayout}
        w={2}
        h={2}
      />
    </div>
  )
}

export default Maze
