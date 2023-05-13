const dbMethods = require('../../database/models/landing/getSample.js');

module.exports = {

  get: (req, res) => {

    dbMethods.getSample((err, result) => {
      if (err) {
        console.log('failing at res.sendStatus(400)', err)
        res.sendStatus(400);
      } else {
        res.status(200).send(result);
      }
    })
  }
}