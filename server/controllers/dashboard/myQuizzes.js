const models = require('../../database/models/index');

module.exports = {

  get: (req, res) => {

    const { userId } = req.query;

    models.myQuizzes.get(userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err.stack);
      res.sendStatus(500);
    });
  },

  delete: (req, res) => {
    const { id } = req.params;

    models.myQuizzes.delete(id)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.error('Failed to delete quiz', err.stack);
      res.sendStatus(500);
    })
  },

}