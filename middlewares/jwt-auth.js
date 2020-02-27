const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = async (req, res, next) => {
  const token = req.headers.bearer;

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'No token',
    });
  }

  const verified = jwt.verify(token, secret);

  if (!verified) {
    return res.status(401).json({
      success: false,
      error: 'Token invalid or expired',
    });
  }

  req.user = verified;

  return next();
};
