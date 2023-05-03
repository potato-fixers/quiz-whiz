require("dotenv").config();
const express = require('express')
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

// =============================================
//                Middleware
// =============================================
app.use(express.json());

// =============================================
//               Route Imports
// =============================================
app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
