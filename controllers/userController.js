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
        // req.session.destroy(() => {
        // });
        req.session.save(() => {
            if (req.session.visitCount) {
                req.session.visitCount++;
            } else {
                req.session.visitCount = 1;
            }
        });
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({plain: true}));
            res.render('allUsers', {
                users,
                favoriteFood: 'Ice cream',
                visitCount: req.session.visitCount,
                loggedInUser: req.session.user || null,
            });
        } catch (e) {
            res.json(e);
        }
    },
    getUserById: async (req, res) => {
        req.session.save(() => {
            if (req.session.visitCount) {
                req.session.visitCount++;
            } else {
                req.session.visitCount = 1;
            }
        });
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = userData.get({ plain: true });
            res.render('singleUser', {
                user,
                visitCount: req.session.visitCount,
            });
        } catch (e) {
            res.json(e);
        }
    },
    getAllUsersPt2: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({plain: true}));
            res.render('allUsersPt2', {
                users,
                favoriteFood: 'Ice cream',
            });
        } catch (e) {
            res.json(e);
        }
    },
    login: async (req, res) => {
        try {
// first find the user with the given email address
            const userData = await User.findOne({ email: req.body.email });
// check if the password from the form is the same password as the user found
// with the given email
// if that is true, save the user found in the req.session.user
            const userFound = userData.get({plain: true});
            if (userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.user = userFound;
                    res.json({success: true});
                });
            }
// if false, ignore for now
        } catch (e) {
        res.json(e);
        }
    }
};