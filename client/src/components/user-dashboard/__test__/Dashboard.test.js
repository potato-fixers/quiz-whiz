import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from '../../global/UserContext.jsx';
import Dashboard from '../Dashboard';
import { setupServer } from 'msw/node';
import { handlers } from './handlers.js';

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders dashboard component', () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </UserProvider>
  );

  // Assert that the tab component is rendered
  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  expect(screen.getByText(/My Quizzes/i)).toBeInTheDocument();
  expect(screen.getByText(/History/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Favorites/i)[0]).toBeInTheDocument();

});

test('changes active tab on tab click', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </UserProvider>
  );

  // Assert that the initial active tab is Overview
  expect(screen.getByRole('tab', {selected: true})).toHaveTextContent('Overview');

  // Simulate clicking on the 'my quizzes' tab
  fireEvent.click(screen.getByText(/My Quizzes/i));
  await waitFor(() =>  expect(screen.getByRole('tab', {selected: true})).toHaveTextContent('My Quizzes'));

  // Simulate clicking on the 'history' tab
  fireEvent.click(screen.getByText(/History/i));
  await waitFor(() =>  expect(screen.getByRole('tab', {selected: true})).toHaveTextContent('History'));

  // Simulate clicking on the 'my quizzes' tab
  fireEvent.click(screen.getByText(/Favorites/i));
  await waitFor(() =>  expect(screen.getByRole('tab', {selected: true})).toHaveTextContent('Favorites'));
});


