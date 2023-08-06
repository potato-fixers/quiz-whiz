module.exports = (req, res, next) => {
  console.log('Route:', req.method, req.originalUrl);
  console.log('Session:', req.session);
  next();
}