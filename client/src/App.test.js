import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { UserProvider } from './components/global/UserContext.jsx';


test('renders learn react link', async () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>);
  const linkElement = screen.getByText(/Welcome to Quiz Whiz/i);
  await waitFor(() => {
    expect(linkElement).toBeInTheDocument();
  });
});
