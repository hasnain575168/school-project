const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const {
  secret,
} = require('../../config');

router.post('/api/auth/register', async (req, res) => {
  const {
    hashSync,
    genSaltSync,
  } = bcryptjs;

  try {
    const {
      username, email, password,
    } = req.body;

    const hash = hashSync(password, genSaltSync(8));

    const user = await User.create({
      username, email, password: hash,
    });

    return res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.post('/api/auth/login', async (req, res) => {
  const {
    compareSync,
  } = bcryptjs;

  try {
    const {
      username, password,
    } = req.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
      });
    }

    if (!compareSync(password, user.password)) {
      return res.status(401).json({
        success: false,
      });
    }

    const payload = {
      email: user.email,
      username: user.username,
    };

    const token = jwt.sign(payload, secret, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
      token,
      user: payload,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.post('/api/auth/verify', async (req, res) => {
  try {
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

    return res.status(200).json({
      success: true,
      user: {
        email: verified.email,
        username: verified.username,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;
