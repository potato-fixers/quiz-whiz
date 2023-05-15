require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT | 8080;
const { dashboard } = require('./routes');
const { expressSession, cors, logger } = require('./middlewares/index');
const { create, getQuizzes, createSample } = require('./routes/index.js');

// =============================================
//                Middleware
// =============================================
app.use(express.json());
app.use(cors)
app.use(expressSession);
app.use(logger)

// =============================================
//               Routes
// =============================================
app.use('/auth', require('./routes/user-auth-route'));
app.use('/quiz', require('./routes/take-quiz'));
app.use('/settings', require('./routes/user-profile'));
app.use('/dashboard', dashboard);
app.use('/create', create);
app.use('/get', getQuizzes);
app.use('/createSample', createSample);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});