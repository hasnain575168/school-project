const router = require('express').Router();

const apiRoutes = require('./api');
const authApiRoutes = require('./api/auth');
const clientRoutes = require('./client');

router.use(apiRoutes);
router.use(authApiRoutes);
router.use(clientRoutes);

module.exports = router;
