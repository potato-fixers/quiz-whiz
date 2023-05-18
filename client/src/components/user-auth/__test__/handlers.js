import {rest} from 'msw';

export const handlers = [
  rest.post('http://localhost:8080/auth/register', (req, res, ctx) => {
    return res(ctx.status(201),ctx.json('sucess'));
  }),

  rest.post('http://localhost:8080/auth/login', (req, res, ctx) => {
    let session = {
      userId: 1,
      first_name: 'test',
      last_name: 'test',
      username: 'admin',
    }
    return res(ctx.json(session));
  }),
];