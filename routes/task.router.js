const router = require('express').Router({
  mergeParams: true
});

const taskController = require('../controllers/task.controller');

// GET: /tasks
router.get('/', (req, res, next) => {
  taskController.then(result => res.json(result)).catch(next);
});

router.post('/', (req, res, next) => {
  taskController
    .create(req)
    .then(result => res.json(result))
    .catch(next);
});

// POST: /tasks
module.exports = router;
