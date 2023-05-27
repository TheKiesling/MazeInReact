import Wall from './Wall'

export default {
  title: 'Walls/Egg',
  component: Wall,
  tags: ['autodocs'],
}

export const EggHorizontal = {
  args: {
    theme: 'egg',
    direction: 'Horizontal',
  },
}

export const EggVertical = {
  args: {
    theme: 'egg',
    direction: 'Vertical',
  },
}

export const EggCorner = {
  args: {
    theme: 'egg',
    direction: 'Corner',
  },
}
