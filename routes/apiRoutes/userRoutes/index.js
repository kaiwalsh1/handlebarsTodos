const router = require('express').Router();
const {
    createUser,
    getUserById,
    login,
    signupHandler,
} = require('../../../controllers/userController');

router.route('/')
    .post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);

router.route('/:userId')
    .get(getUserById);

module.exports = router;