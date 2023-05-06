const dbMethods = require('../../database/models/create-quiz.js')

module.exports = {

  post: (req, res) => {
    // connect to db methods here
    console.log('what is our body data', req.body);
    // database method/interaction
    // dbMethods.createQuiz('quiz data', (err, res) => {
    //   if (err) {
    //     res.status(400).send('failed to post quiz data')
    //   } else {
    //     res.status(200).send('successful post')
    //   }
    // })
  },

}