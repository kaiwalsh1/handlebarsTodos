const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { getAllUsers } = require('../controllers/userController');

router.get('/', getAllUsers);
router.use('/api', apiRoutes);



module.exports = router;