import Input from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
  },
}

export const Number = {
  args: {
    label: 'Ancho',
    name: 'width',
    type: 'number',
  },
}

export const Checkbox = {
  args: {
    label: 'Límite de tiempo',
    name: 'time',
    type: 'checkbox',
  },
}

export const Dropdown = {
  args: {
    label: 'Personaje',
    name: 'character',
    type: 'dropdown',
  },
}
