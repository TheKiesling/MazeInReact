import Game from './Game'

export default {
  title: 'Games/Game',
  component: Game,
  tags: ['autodocs'],
}

export const RickRock = {
  args: {
    character: 'rick',
    theme: 'rock',
    json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|'],
      ['+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
    w: 2,
    h: 2,
  },
}

export const PickleSeedling = {
  args: {
    character: 'pickle',
    theme: 'seedling',
    json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|'],
      ['+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
    w: 2,
    h: 2,
  },
}

export const DoofusEgg = {
  args: {
    character: 'doofus',
    theme: 'egg',
    json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|'],
      ['+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
    w: 2,
    h: 2,
  },
}
