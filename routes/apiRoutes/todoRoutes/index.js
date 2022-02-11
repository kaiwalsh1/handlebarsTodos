const router = require('express').Router();
const { createTodo } = require('../../../controllers/todoController');

// /api/todos
router.post('/', createTodo);

module.exports = router;