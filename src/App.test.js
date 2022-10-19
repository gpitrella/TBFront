import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Title:', () => {
  render(<App />);
  const title = screen.getByText(/REACT TEST APP/i);
  expect(title).toBeInTheDocument();
});
