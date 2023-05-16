const models = require('../../database/models/index');

module.exports = {

  get: (req, res) => {

    const { userId } = req.query;

    models.overview.get(userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err.stack);
    })
  },

};