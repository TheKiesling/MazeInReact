import React from 'react'
import { useStoreon } from 'storeon/react'
import { routerKey } from '@storeon/router'
import {
  useConfigForm,
} from '@hooks'
import { default as Home } from './Home/Home'
import { default as Config } from './Config/Config'
import { default as Maze } from './Maze/Maze'
import { default as GameOver } from './GameOver/GameOver'

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  const [configForm, handleChange] = useConfigForm()
  switch (route.match.page) {
    case 'home':
      Component = <Home />
      break
    case 'config':
      Component = <Config configForm={configForm} handleChange={handleChange} />
      break
    case 'maze':
      Component = <Maze configForm={configForm} />
      break
    case 'gameover':
      Component = <GameOver />
      break
    default:
      Component = <h1>404</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
