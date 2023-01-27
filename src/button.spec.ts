import { render } from '@testing-library/vue'
import Button from './button.vue'
import './style.css'

it('works', async () => {
  const result = render(Button)
  expect(result.html().trim().replace(/\n/g, '')).toBe('<h1>Hello World!</h1><input>')
})
