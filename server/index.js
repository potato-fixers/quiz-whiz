require("dotenv").config();
const express = require('express')
const app = express();
const axios = require('axios');
const port = process.env.SERVER_PORT | 8080;
const { dashboard } = require('./routes');
const expressSession = require('./middlewares/sessions');
const { create } = require('./routes/index.js')
const cors = require('cors');

// =============================================
//                Middleware 
// =============================================
app.use(express.json());
app.use(expressSession);
app.use(cors({origin: `${process.env.API_URL}`}))

// =============================================
//               Routes
// =============================================
app.use('/auth', require('./routes/user-auth-route'));
app.use('/quiz', require('./routes/take-quiz'));
app.use('/dashboard', dashboard);
app.use('/create', create);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});