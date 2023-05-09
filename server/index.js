require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT | 8080;
const { dashboard } = require('./routes');
const expressSession = require('./middlewares/sessions');
const { create } = require('./routes/index.js')
const bodyParser = require('body-parser')
const cors = require('cors');

// =============================================
//                Middleware 
// =============================================
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressSession);
app.use(cors({origin: 'http://localhost:3000'}))

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