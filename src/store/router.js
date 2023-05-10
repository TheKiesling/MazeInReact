import { createRouter } from '@storeon/router'

export default createRouter([
  ['/', () => ({ page: 'home' })],
  ['/config', () => ({ page: 'config' })],
  ['/maze', () => ({ page: 'maze' })],
  ['/gameover', () => ({ page: 'gameover' })],
])
