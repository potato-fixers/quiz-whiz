const models = require('../../database/models')

module.exports = {

  get: (req, res) => {
    res.send(models.history.get());
  },

}