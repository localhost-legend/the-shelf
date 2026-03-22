// Button.stories.jsx
import { Button } from './Button'

export default {
  title: 'UI/Button',
  component: Button,
}

export const Primary = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Click me',
    variant: 'secondary',
  },
}
