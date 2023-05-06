module.exports = {

  get: (req, res) => {
    let query = req.query;
    res.send('10 most recent played quizzes and counts');
  },

};