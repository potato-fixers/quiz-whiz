const dbMethods = require('../../database/models/create/create-quiz.js');
const sampleData = require('./sampleData.js');

module.exports = {

  createSample: (req, res) => {
    // connect to db methods here
   // database method/interaction

  sampleData.forEach((data, i) => {
    dbMethods.createQuiz(data, (err, result) => {
        if (err) {
          console.log('failing at res.sendStatus(400)', err)
          res.sendStatus(400);
        } else {
          console.log(`Completed ${i}`);
        }
      })
  })
  res.sendStatus(200);
  }
}