const dbMethods = require('../../database/models/landing/getQuizzes.js');

module.exports = {

  get: (req, res) => {
    dbMethods.getQuizzes(req.query, (err, result) => {
      if (err) {
        console.log('failing at res.sendStatus(400)', err)
        res.sendStatus(400);
      } else {
        res.status(200).json(result);
      }
    })
  }
}