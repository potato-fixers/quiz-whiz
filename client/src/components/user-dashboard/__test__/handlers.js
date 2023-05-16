import {rest} from 'msw';

export const handlers = [
  rest.get('http://localhost:8080/dashboard/counts', (req, res, ctx) => {
    let counts = {
      quizzes: 10,
      plays: 23,
      favorites: 6
    }
    return res(ctx.json(counts));
  }),
  rest.get('http://localhost:8080/dashboard/', (req, res, ctx) => {
    let quizzes = [
      {
        id: 1,
        quiz_name: 'Quiz E',
        score: '73%',
        date: 'May 5th, 2023'
      },
      {
        id: 7,
        quiz_name: 'Quiz D',
        score: '90%',
        date: 'May 5th, 2023'
      },
      {
        id: 2,
        quiz_name: 'Quiz C',
        score: '34%',
        date: 'May 4th, 2023'
      },
      {
        id: 5,
        quiz_name: 'Quiz B',
        score: '45%',
        date: 'May 3th, 2023'
      },
      {
        id: 43,
        quiz_name: 'Quiz A',
        score: '56%',
        date: 'May 2th, 2023'
      },
    ];
    return res(ctx.json(quizzes));
  }),
  rest.get('http://localhost:8080/dashboard/quizzes', (req, res, ctx) => {
    let quizzes = [
      {
        id: 58,
        quiz_name: 'Math Quiz',
        category: 'Education',
        type: 'Multiple choices',
        plays: 3,
        likes: 1,
        created_at: 'May 5th, 2023'
      },
      {
        id: 35,
        quiz_name: 'Song Quiz',
        category: 'Music',
        type: 'Multiple choices',
        plays: 23,
        likes: 12,
        created_at: 'May 23th, 2022'
      },
      {
        id: 64,
        quiz_name: 'Bollywood movie quiz',
        category: 'Movie',
        type: 'True/Fasle',
        plays: 34,
        likes: 15,
        created_at: 'Jan 6th, 2023'
      },
      {
        id: 5,
        quiz_name: 'Lakers or Warriors?',
        category: 'Sport',
        type: 'Multiple choices',
        plays: 45,
        likes: 21,
        created_at: 'May 5th, 2020'
      },
      {
        id: 43,
        quiz_name: 'More math quiz',
        category: 'Education',
        type: 'Multiple choices',
        plays: 1,
        likes: 0,
        created_at: 'May 5th, 1999'
      },
    ];
    return res(ctx.json(quizzes));
  }),
  rest.get('http://localhost:8080/dashboard/history', (req, res, ctx) => {
    const data = [
      {
        id: 1,
        quiz_name: 'Quiz E',
        category: 'Music',
        plays: 13,
        score: '73%',
        duration: 300, // seconds or ms
        finished: true,
        date: 'May 5th, 2023'
      },
      {
        id: 7,
        quiz_name: 'Quiz D',
        category: 'Sport',
        plays: 2,
        score: '90%',
        duration: 240, // seconds
        finished: true,
        date: 'Apr 5th, 2023'
      },
      {
        id: 2,
        quiz_name: 'Quiz C',
        category: 'Education',
        plays: 1,
        score: '34%',
        duration: null,
        finished: false,
        date: 'May 4th, 2023'
      },
      {
        id: 5,
        quiz_name: 'Quiz B',
        category: 'Sport',
        plays: '3',
        score: '45%',
        duration: 300,
        finished: true,
        date: 'May 3th, 2023'
      },
      {
        id: 43,
        quiz_name: 'Quiz A',
        category: 'Music',
        plays: 5,
        score: '56%',
        duration: 500,
        finished: true,
        date: 'May 2th, 2023'
      },
    ];
    return res(ctx.json(data));
  }),
  rest.get('http://localhost:8080/dashboard/favorites', (req, res, ctx) => {
    const data = [
      {
        id: 1,
        quiz_name: 'Quiz E',
        category: 'Music',
        totalPlays: 23,
        totalLikes: 13,
        date: 'May 5th, 2023'
      },
      {
        id: 7,
        quiz_name: 'Quiz D',
        category: 'Sport',
        totalPlays: 34,
        totalLikes: 34,
        date: 'May 5th, 2023'
      },
      {
        id: 2,
        quiz_name: 'Quiz C',
        category: 'Education',
        totalPlays: 231,
        totalLikes: 133,
        date: 'May 4th, 2023'
      },
      {
        id: 5,
        quiz_name: 'Quiz B',
        category: 'Sport',
        totalPlays: 31,
        totalLikes: 3,
        date: 'May 3th, 2023'
      },
      {
        id: 43,
        quiz_name: 'Quiz A',
        category: 'Music',
        totalPlays: 21,
        totalLikes: 13,
        date: 'May 2th, 2023'
      },
    ];
    return res(ctx.json(data));
  }),
];

test('dummy test', function() {
  expect(0).toBe(0);
});