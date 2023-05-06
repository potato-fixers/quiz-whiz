

module.exports = {

  get: (req, res) => {
    res.send('some created quizzes and total count');
  },

  delete: (req, res) => {
    res.send('remove or modify quiz owner to admin');
  },

}