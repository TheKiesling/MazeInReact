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
    w: '2',
    h: '2',
  },
}
