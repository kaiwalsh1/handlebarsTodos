const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    login,
} = require('../../../controllers/userController');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.post('/login', login);

router.route('/:userId')
    .get(getUserById);

module.exports = router;