const dbMethods = require('../../database/models/create/create-quiz.js');

module.exports = {

  submit: (req, res) => {
    // connect to db methods here
   // database method/interaction

    dbMethods.createQuiz(req.body, (err, result) => {
      if (err) {
        console.log('failing at res.sendStatus(400)', err)
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    })
  }
}