import { render } from '@testing-library/react';
import App from '../App'

it('renders with the h1 content as Hello, automatic deployment!', () => {
  render(<App />);

  const h1 = document.querySelector('h1');
  expect(h1.textContent).toBe('Hello, automatic deployment!');
})