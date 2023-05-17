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
    res.send('like a quiz');
  },

  delete:  (req, res) => {
    res.send('delete a quiz');
  },

}