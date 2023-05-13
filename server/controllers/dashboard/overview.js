const models = require('../../database/models/index');

module.exports = {

  get: (req, res) => {
    let query = req.query;
    res.send(models.overview.get());
  },

};