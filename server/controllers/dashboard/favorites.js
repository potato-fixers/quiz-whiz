

module.exports = {

  get: (req, res) => {
    res.send('some faved quizzes and total count')
  },

  like: (req, res) => {
    res.send('like a quiz');
  },

  delete:  (req, res) => {
    res.send('delete a quiz');
  },

}