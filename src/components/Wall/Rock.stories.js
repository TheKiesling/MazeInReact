import Wall from './Wall'

export default {
  title: 'Walls/Rock',
  component: Wall,
  tags: ['autodocs'],
}

export const RockHorizontal = {
  args: {
    theme: 'rock',
    direction: 'Horizontal',
  },
}

export const RockVertical = {
  args: {
    theme: 'rock',
    direction: 'Vertical',
  },
}

export const RockCorner = {
  args: {
    theme: 'rock',
    direction: 'Corner',
  },
}
