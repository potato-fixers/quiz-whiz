const models = require('../../database/models/index');

module.exports = {

  get: (req, res) => {
    res.send(models.myQuizzes.get());
  },

  delete: (req, res) => {
    res.send('remove or modify quiz owner to admin');
  },

}