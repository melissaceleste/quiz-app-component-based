import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Click')
export const longText = () => Button('you should click that')
