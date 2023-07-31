import {rest} from 'msw';
import.meta.env.VITE_APP_API_URI
export const handlers = [
  rest.post(`${import.meta.env.VITE_APP_API_URI}/auth/register`, (req, res, ctx) => {
    return res(ctx.status(201),ctx.json('sucess'));
  }),

  rest.post(`${import.meta.env.VITE_APP_API_URI}/auth/login`, (req, res, ctx) => {
    let session = {
      userId: 1,
      first_name: 'test',
      last_name: 'test',
      username: 'admin',
    }
    return res(ctx.json(session));
  }),
];