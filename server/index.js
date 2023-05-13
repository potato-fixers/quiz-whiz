require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT
const { dashboard } = require('./routes');
const { expressSession, cors, logger } = require('./middlewares/index');
const { create } = require('./routes/index.js');

// =============================================
//                Middleware
// =============================================
app.use(express.json());
app.use(cors)
app.use(expressSession);
app.use(logger)

// =============================================
//               Route Imports
// =============================================
app.use('/auth', require('./routes/user-auth-route'));

app.get('/api', (req, res) => {
  res.json('Hello Quiz Whiz Backend')
});

app.use('/quiz', require('./routes/take-quiz'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// =============================================
//               Create A Quiz Route
// =============================================
app.use('/create', create);

// =============================================
//               Dashboard Routes
// =============================================
app.use('/dashboard', dashboard);