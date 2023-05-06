require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT || 8080;
const dbMethods = require('./database/index.js')
const { dashboard } = require('./routes');
const { createQuiz } = require ('./routes')

// =============================================
//                Middleware
// =============================================
app.use(express.json());

// =============================================
//               Route Imports
// =============================================
app.use('/auth', require('./routes/user-auth-route')); // had to use `/api/cart` bc express assumes the first url param is the product id

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
app.use('/create', createQuiz)

// =============================================
//               Dashboard Routes
// =============================================
app.use('/dashboard', dashboard);