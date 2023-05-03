require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT || 8080;

// =============================================
//                Middleware
// =============================================
app.use(express.json());

// =============================================
//               Route Imports
// =============================================
app.get('/api', (req, res) => {
  res.json('Hello Quiz Whiz Backend')  
});

app.use('/quiz', require('./routes/take-quiz'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
