const {
    User
} = require('../models');

module.exports = {
// create user
    createUser: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'You must provide username, email, and password'});
        }
        try {
            const user = await User.create({
                username,
                email,
                password,
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },
// get all users
    getAllUsers: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({plain: true}));
            res.render('allUsers', {
                users,
                favoriteFood: 'Ice cream',
            });
        } catch (e) {
            res.json(e);
        }
    },
    getUserById: async (req, res) => {
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = userData.get({ plain: true });
            res.render('singleUser', {
                user
            });
        } catch (e) {
            res.json(e);
        }
    },
};