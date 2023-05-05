import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Quiz Whiz/i);
  await waitFor (() => {
    expect(linkElement).toBeInTheDocument();
  });
});
