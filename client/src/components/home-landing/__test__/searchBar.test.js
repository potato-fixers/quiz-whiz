import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen, within} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../components/SearchBar.jsx';
import "@testing-library/jest-dom/extend-expect";
// import { UserProvider } from '../../global/UserContext.jsx';
// import { BrowserRouter } from 'react-router-dom';
const server = setupServer(
  rest.get('/get*', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays SearchBar', async () => {
  const setQuizzes = () => {
    return ;
  }
  const setUserCategory = () => {
    return 'All';
  }
  const setDifficulty = () => {
    return 'All';
  }
  const setCurrent = () => {
    return ;
  }
  let difficulty = 'All';
  let userCategory = 'All';
  let userId = 1;
  let categoryList = ['All', 'Politics', 'Sports', 'Art', 'History', 'General Knowledge', 'Policits']
  render(<SearchBar setQuizzes={setQuizzes} setUserCategory={setUserCategory} setDifficulty={setDifficulty}
    difficulty={difficulty} categoryList={categoryList} userCategory={userCategory} setCurrent={setCurrent} id={userId}/>)
  const text = screen.getAllByText('Categories');
  expect(text[0]).toBeInTheDocument();
})

test('loads and displays SearchBar input', async () => {
  server.use(
    rest.get('http://localhost:8080/get/getQuizzes', (req, res, ctx) => {
      return res(ctx.json({rows: [{"id":1,"user_id":1,"category":"Politics","difficulty":"medium","quiz_name":"History & Politics","created_at":"2023-05-16T07:00:00.000Z"},{"id":2,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Sport Facts","created_at":"2023-05-16T07:00:00.000Z"},{"id":3,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Gabbys Test Quiz","created_at":"2023-05-16T07:00:00.000Z"},{"id":4,"user_id":1,"category":"Art","difficulty":"easy","quiz_name":"Art Easy Questions","created_at":"2023-05-16T07:00:00.000Z"},{"id":5,"user_id":1,"category":"History","difficulty":"easy","quiz_name":"History Easy Questions","created_at":"2023-05-16T07:00:00.000Z"}]}))
    }),
  )
  const setQuizzes = () => {
    return ;
  }
  const setUserCategory = () => {
    return 'All';
  }
  const setDifficulty = () => {
    return 'All';
  }
  const setCurrent = () => {
    return ;
  }
  let difficulty = 'All';
  let userCategory = 'All';
  let userId = 1;
  let categoryList = ['All', 'Politics', 'Sports', 'Art', 'History', 'General Knowledge', 'Policits']
  render(<SearchBar setQuizzes={setQuizzes} setUserCategory={setUserCategory} setDifficulty={setDifficulty}
    difficulty={difficulty} categoryList={categoryList} userCategory={userCategory} setCurrent={setCurrent} id={userId}/>)
  // eslint-disable-next-line testing-library/no-node-access
  const input = screen.getByTestId('search-input').querySelector('input');
  fireEvent.change(input, {target: {value: 'Art'}})
  expect(input.value).toBe('Art');

})

test('loads and displays SearchBar category', async () => {
  server.use(
    rest.get('http://localhost:8080/get/getQuizzes', (req, res, ctx) => {
      return res(ctx.json({rows: [{"id":1,"user_id":1,"category":"Politics","difficulty":"medium","quiz_name":"History & Politics","created_at":"2023-05-16T07:00:00.000Z"},{"id":2,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Sport Facts","created_at":"2023-05-16T07:00:00.000Z"},{"id":3,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Gabbys Test Quiz","created_at":"2023-05-16T07:00:00.000Z"},{"id":4,"user_id":1,"category":"Art","difficulty":"easy","quiz_name":"Art Easy Questions","created_at":"2023-05-16T07:00:00.000Z"},{"id":5,"user_id":1,"category":"History","difficulty":"easy","quiz_name":"History Easy Questions","created_at":"2023-05-16T07:00:00.000Z"}]}))
    }),
  )
  const setQuizzes = () => {
    return ;
  }
  const setUserCategory = (input) => {
    userCategory = input;
  }
  const setDifficulty = () => {
    return 'All';
  }
  const setCurrent = () => {
    return ;
  }
  let difficulty = 'All';
  let userCategory = 'All';
  let userId = 1;
  let categoryList = ['All', 'Politics', 'Sports', 'Art', 'History', 'General Knowledge', 'Policits']
  const {getByRole} = render(<SearchBar setQuizzes={setQuizzes} setUserCategory={setUserCategory} setDifficulty={setDifficulty}
    difficulty={difficulty} categoryList={categoryList} userCategory={userCategory} setCurrent={setCurrent} id={userId}/>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const role = screen.getAllByText(/All/i);
    fireEvent.mouseDown(role[0]);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const listbox = within(getByRole('listbox'));
    fireEvent.click(listbox.getByText(/Art/i));
    const text = screen.getAllByText('Art');
    expect(text[0]).toBeInTheDocument();

})