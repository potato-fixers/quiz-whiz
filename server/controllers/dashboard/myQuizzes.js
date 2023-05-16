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
    res.send('remove or modify quiz owner to admin');
  },

}