import Button from './Button'

export default {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    type: 'primary',
  },
}

export const Secondary = {
  args: {
    type: 'secondary',
  },
}

export const Disabled = {
  args: {
    type: 'primary',
    disabled: true,
  },
}
