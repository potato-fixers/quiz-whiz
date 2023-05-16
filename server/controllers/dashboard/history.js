const models = require('../../database/models')

module.exports = {

  get: (req, res) => {
    const { userId } = req.query;
    models.history.get(userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

}