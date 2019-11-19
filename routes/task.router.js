const router = require('express').Router({
  mergeParams: true
});

const taskController = require('../controllers/task.controller');

// GET: /tasks
router.get('/', (req, res, next) => {
  taskController
    .index()
    .then(result => res.json(result))
    .catch(next);
});

// POST: /tasks
router.post('/', (req, res, next) => {
  taskController
    .create(req.body)
    .then(result => res.json(result))
    .catch(next);
});

// PUT: /tasks/:id
router.put('/:id', (req, res, next) => {
  taskController
    .update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
