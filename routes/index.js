const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { getAllUsers, loginView, signupView } = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);



module.exports = router;