import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from '../../global/UserContext.jsx';
import { setupServer } from 'msw/node';
import { handlers } from './handlers.js';

import Login from '../../../pages/Login.jsx';
import Register from '../../../pages/Register.jsx';

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders Register page', () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </UserProvider>
  );

  // Assert that the tab component is rendered
  expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  expect(screen.getByLabelText('Confirm Password:')).toBeInTheDocument();
  expect(screen.getByLabelText('Bio:')).toBeInTheDocument();
  expect(screen.getByLabelText('Profile Image:')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();

});

test('renders Login page', () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </UserProvider>
  );

  // Assert that the tab component is rendered
  expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  expect(screen.getByLabelText('Password:')).toBeInTheDocument();
});


test('registers a user successfully', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </UserProvider>
  );
  // Fill in the form fields
  const firstNameInput = screen.getByLabelText('First Name:');
  const lastNameInput = screen.getByLabelText('Last Name:');
  const emailInput = screen.getByLabelText('Email:');
  const passwordInput = screen.getByLabelText('Password:');
  const confirmPasswordInput = screen.getByLabelText('Confirm Password:');
  const submitButton = screen.getByRole('button', { name: 'Register' });

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Verify the expected behavior or state changes
  expect(screen.queryByText('Uh oh, we have trouble processing your request, please try again later')).not.toBeInTheDocument();
});

test('Login user successfully', async () => {
  render(
    <UserProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </UserProvider>
  );
  // Fill in the form fields
  const emailInput = screen.getByLabelText('Email:');
  const passwordInput = screen.getByLabelText('Password:');
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(submitButton);

  // Verify the expected behavior or state changes
  expect(screen.queryByText('Incorrect username and password, please try again!')).not.toBeInTheDocument();
});

// test('User stays logged in', async () => {
//   render(
//     <UserProvider>
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     </UserProvider>
//   );
//   // Fill in the form fields
//   const emailInput = screen.getByLabelText('Email:');
//   const passwordInput = screen.getByLabelText('Password:');
//   const submitButton = screen.getByRole('button', { name: 'Submit' });

//   fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
//   fireEvent.change(passwordInput, { target: { value: 'password123' } });

//   // Submit the form
//   fireEvent.click(submitButton);

//   // Verify the expected behavior or state changes
//   expect(screen.queryByText('Incorrect username and password, please try again!')).not.toBeInTheDocument();
// });