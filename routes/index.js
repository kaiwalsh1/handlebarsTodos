const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView } = require('../controllers/userController');
const { getAllTodos } = require('../controllers/todoController');
router.get('/', renderHomePage);
router.get('/todos', getAllTodos);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);

module.exports = router;