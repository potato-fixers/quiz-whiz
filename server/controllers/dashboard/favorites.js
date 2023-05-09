const models = require('../../database/models')

module.exports = {

  get: (req, res) => {
    res.send(models.favorites.get())
  },

  like: (req, res) => {
    res.send('like a quiz');
  },

  delete:  (req, res) => {
    res.send('delete a quiz');
  },

}