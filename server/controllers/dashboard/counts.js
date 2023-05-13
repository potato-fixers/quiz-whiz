const models = require('../../database/models')

module.exports = {

  get: (req, res) => {
    res.json(models.counts.get());
  },

}