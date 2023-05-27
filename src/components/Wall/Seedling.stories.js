import Wall from './Wall'

export default {
  title: 'Walls/Seedling',
  component: Wall,
  tags: ['autodocs'],
}

export const SeedlingHorizontal = {
  args: {
    theme: 'seedling',
    direction: 'Horizontal',
  },
}

export const SeedlingVertical = {
  args: {
    theme: 'seedling',
    direction: 'Vertical',
  },
}

export const SeedlingCorner = {
  args: {
    theme: 'seedling',
    direction: 'Corner',
  },
}
