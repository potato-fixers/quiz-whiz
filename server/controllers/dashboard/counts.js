const models = require('../../database/models')

module.exports = {

  get: (req, res) => {
    models.counts.get()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err.stack)
    });
  },

}