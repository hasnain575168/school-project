const router = require('express').Router();

const postRoutes = require('./post');

router.use(postRoutes);

module.exports = router;
