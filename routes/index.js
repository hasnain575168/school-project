const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    res.send('error');
  }
});

module.exports = router;
