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

test('overview tab', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </UserProvider>
  );

   // Assert that the Overview component is rendered
   expect(screen.getByText('Recent plays')).toBeInTheDocument();

   // Assert that the quiz data is displayed correctly
   expect(await screen.findByText('Quiz E')).toBeInTheDocument();
   expect(screen.getByText('73%')).toBeInTheDocument();
   expect(screen.getByText('Quiz D')).toBeInTheDocument();
   expect(screen.getByText('90%')).toBeInTheDocument();
});

test('my quizzes tab', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </UserProvider>
  );

  // Simulate clicking on the 'my quizzes' tab
  fireEvent.click(screen.getByText(/My Quizzes/i));

  // Assert that the My Quizzes component is rendered
  expect(screen.getAllByText('My Quizzes').length).toBe(2);

  // Assert that the quiz data is displayed correctly
  expect(await screen.findByText('Math Quiz')).toBeInTheDocument();
  expect(await screen.findByText('Song Quiz')).toBeInTheDocument();
  expect(await screen.findByText('Bollywood movie quiz')).toBeInTheDocument();
  expect(await screen.findByText('Lakers or Warriors?')).toBeInTheDocument();
  expect(await screen.findByText('More math quiz')).toBeInTheDocument();

  // Simulate clicking on quiz name
  fireEvent.click(screen.getByText(/Song Quiz/i));

  // Assert that the the page was redirect to taking quiz
  expect(await screen.findByText(/CATEGORY/i)).toBeInTheDocument();

  // Simulate clicking headers
  fireEvent.click(screen.getByText(/Likes/i));
});

test('history tab', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </UserProvider>
  );

  // Simulate clicking on the 'my quizzes' tab
  fireEvent.click(screen.getByText(/History/i));

  // Assert that the My Quizzes component is rendered
  expect(screen.getAllByText('History').length).toBe(2);

  // Assert that the quiz data is displayed correctly
  expect(await screen.findByText('Quiz E')).toBeInTheDocument();
  expect(await screen.findByText('Quiz D')).toBeInTheDocument();
  expect(await screen.findByText('Quiz C')).toBeInTheDocument();
  expect(await screen.findByText('Quiz B')).toBeInTheDocument();
  expect(await screen.findByText('Quiz A')).toBeInTheDocument();

  // Simulate clicking on quiz name
  fireEvent.click(screen.getByText(/Quiz A/i));

  // Assert that the the page was redirect to taking quiz
  expect(await screen.findByText(/CATEGORY/i)).toBeInTheDocument();

  // Simulate clicking headers
  fireEvent.click(screen.getByText(/Best Score/i));
});

test('favorites tab', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </UserProvider>
  );

  // Simulate clicking on the 'my quizzes' tab
  fireEvent.click(screen.getAllByText(/Favorites/i)[0]);

  // Assert that the My Quizzes component is rendered
  expect(screen.getAllByText('Favorites').length).toBe(3);

  // Assert that the quiz data is displayed correctly
  expect(await screen.findByText('Quiz E')).toBeInTheDocument();
  expect(await screen.findByText('Quiz D')).toBeInTheDocument();
  expect(await screen.findByText('Quiz C')).toBeInTheDocument();
  expect(await screen.findByText('Quiz B')).toBeInTheDocument();
  expect(await screen.findByText('Quiz A')).toBeInTheDocument();

  // Simulate clicking on quiz name
  fireEvent.click(screen.getByText(/Quiz A/i));

  // Assert that the the page was redirect to taking quiz
  expect(await screen.findByText(/CATEGORY/i)).toBeInTheDocument();

  // Simulate clicking headers
  fireEvent.click(screen.getByText(/Total Likes/i));
});