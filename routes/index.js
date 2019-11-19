const router = require('express').Router();

router.use('/api/v1/tasks', require('./task.router'));

/* GET home page. */
router.get('/', (req, res, next) =>
  res.status(200).send({
    message: 'The Beginning of Nothingness'
  })
);

module.exports = router;
