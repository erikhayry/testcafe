import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'
import logo from "./logo.svg";

expect.extend(toHaveNoViolations)

it('should have alt tag', async () => {
  const { container } = render(<img src={logo} className="App-logo" />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should have correct heading order', async () => {
  const { container } = render(<>
    <h1>Heading 1</h1>
    <h3>Heading 3</h3>
  </>)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should have unique landmarks', async () => {
  const { container } = render(<>
    <nav>Nav 1</nav>
    <nav>Nav 2</nav>
  </>)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should have form element labels', async () => {
  const { container } = render(<input type="text"/>)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should not have tab index greater than 0', async () => {
  const { container } = render(<button tabIndex={1}>Click me</button>)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should button name', async () => {
  const { container } = render(<button />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})