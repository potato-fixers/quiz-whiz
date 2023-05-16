const models = require('../../database/models')

module.exports = {

  get: (req, res) => {

    const { userId } = req.query;

    models.favorites.get(userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err.stack);
      res.sendStatus(500);
    })
  },

  like: (req, res) => {
    const { userId, quizId } = req.body;

    models.favorites.like(userId, quizId)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

  unlike:  (req, res) => {
    res.send('delete a quiz');
  },

}