import { render, screen } from '@testing-library/react';
import App from './App';

// 1 - A simple test to ensure the app renders.
test('renders portfolio app', () => {
  render(<App />);

  // 2 - Expect to be able to find the element by the text of 'digital portfolio'
  const linkElement = screen.getByText(/coding software/i);
  expect(linkElement).toBeInTheDocument();
});
