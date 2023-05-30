/* eslint-disable import/no-unresolved */
import React from 'react'

import {
  navigate,
} from '@store'

import {
  Button,
} from '@components'

import styles from './Home.module.css'

const Home = () => (
  <div className={`${styles.home}`}>
    <img
      src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
      alt=""
    />
    <Button text="Comenzar" onClick={() => navigate('/config')} />
  </div>
)

export default Home
