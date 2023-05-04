require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT || 8080;
const dbMethods = require('./database/index.js')

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


// =============================================
//               Create A Quiz Route
// =============================================
app.post('/create', (err, res) => {
  // what does the quiz form data look like? 
  console.log('incoming data', req.body)
  // simple db method call using imported function from database index.js
  dbMethods.createQuiz(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(result);
    }
  })
})