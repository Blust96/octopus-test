import { fireEvent, render } from '@testing-library/react'

import { Button } from './Button'

test('it should render correctly', () => {
  const { getByRole } = render(<Button>Add</Button>)

  const button = getByRole('button')
  expect(button.textContent).toBe('Add')
})

test('it should call onClick props', () => {
  const handleClick = jest.fn()

  const { getByRole } = render(<Button onClick={handleClick}>Add</Button>)

  const button = getByRole('button')
  fireEvent.click(button)

  expect(handleClick).toBeCalledTimes(1)
})
