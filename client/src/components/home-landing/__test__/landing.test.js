import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CategoryList from '../components/CategoryList.jsx';
import Pagination from '../components/Pagination.jsx';
import Landing from '../Landing.jsx';
import QuizList from '../components/QuizList.jsx';
import { UserProvider } from '../../global/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('/get*', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays categoryList', async () => {
  let category = 'Art';
  const setCategory = () => {
    category = 'Art';
  }
  render(<CategoryList setCategory={setCategory} category={category}/>)

  fireEvent.click(screen.getByText('Art'))

  expect(screen.getByText('Art')).toBeInTheDocument();
  expect(screen.getByText('History')).toBeInTheDocument();
  expect(screen.getByText('General Knowledge')).toBeInTheDocument();
  expect(screen.getByText('Politics')).toBeInTheDocument();
  expect(screen.getByText('Sports')).toBeInTheDocument();
})

test('loads and displays Pagination', async () => {
  let page = 0;
  const setPage = (newPage) => {
    page = newPage;
  }
  let quizzes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  const setCurrent = () => {
    return ;
  }
  const {rerender} = render(<Pagination page={page} setPage={setPage} quizzes={quizzes} setCurrent={setCurrent} />)

  fireEvent.click(screen.getByText(1))
  expect(screen.getByText(1)).toBeInTheDocument();
  fireEvent.click(screen.getByText(4))
  expect(screen.getByText(4)).toBeInTheDocument();

  rerender(<Pagination page={page} setPage={setPage} quizzes={[1,2,3,4,5]} setCurrent={setCurrent} />)
  fireEvent.click(screen.getByText(1))
  expect(screen.getByText(1)).toBeInTheDocument();
})

test('loads and displays Landing Loged out', async () => {
  server.use(
    rest.get('http://localhost:8080/get/getQuizzes', (req, res, ctx) => {
      return res(ctx.json({rows: [{"id":1,"user_id":1,"category":"Politics","difficulty":"medium","quiz_name":"History & Politics","created_at":"2023-05-16T07:00:00.000Z"},{"id":2,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Sport Facts","created_at":"2023-05-16T07:00:00.000Z"},{"id":3,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Gabbys Test Quiz","created_at":"2023-05-16T07:00:00.000Z"},{"id":4,"user_id":1,"category":"Art","difficulty":"easy","quiz_name":"Art Easy Questions","created_at":"2023-05-16T07:00:00.000Z"},{"id":5,"user_id":1,"category":"History","difficulty":"easy","quiz_name":"History Easy Questions","created_at":"2023-05-16T07:00:00.000Z"}]}))
    }),
  )
  render(
    <UserProvider>
      <Landing />
    </UserProvider>);
  expect(screen.getByText('Welcome to Quiz Whiz')).toBeInTheDocument();
})

test('loads and displays QuizList', async () => {
  let quizzes = [{"id":1,"user_id":1,"category":"Politics","difficulty":"medium","quiz_name":"History & Politics","created_at":"2023-05-16T07:00:00.000Z"},{"id":2,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Sport Facts","created_at":"2023-05-16T07:00:00.000Z"},{"id":3,"user_id":1,"category":"Sports","difficulty":"easy","quiz_name":"Gabbys Test Quiz","created_at":"2023-05-16T07:00:00.000Z"}];
  // let category = "Politics";

  render(
    <BrowserRouter>
    <QuizList category={'Politics'} quizzes={quizzes} />
    </BrowserRouter>);


  expect(screen.getByText('Name')).toBeInTheDocument();
})
