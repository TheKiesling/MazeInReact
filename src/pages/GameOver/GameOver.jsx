import React from 'react'

import {
  navigate,
} from '@store'

import {
  Button,
} from '@components'

import styles from './GameOver.module.css'

const GameOver = () => (
  <div className={`${styles.gameOver}`}>
    <img
      src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
      alt=""
    />
    <div className={`${styles.buttons}`}>
      <Button text="Volver a jugar" onClick={() => navigate('/config')} />
      <Button text="Salir" type="Secondary" onClick={() => navigate('/')} />
    </div>
  </div>
)

export default GameOver
