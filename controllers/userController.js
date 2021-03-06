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
            console.log(user);
        } catch (e) {
            res.json(e);
        }
    },
// get all users
        // req.session.destroy(() => {
        // });
    renderHomePage: async (req, res) => {
        res.render('homepage');
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
    login: async (req, res) => {
        try {
// first find the user with the given email address
            const userData = await User.findOne({ email: req.body.email });
// check if the password from the form is the same password as the user found
// with the given email
// if that is true, save the user found in the req.session.user
            const userFound = userData.get({ plain: true });
            if (userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.loggedIn = true;
                    req.session.user = userFound;
                    res.json({ success: true });
                });
            }
// if false, ignore for now
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    },
    signupHandler: async (req, res) => {
        const { email, username, password } = req.body;
        if (!email || !username || !password) {
            return res.json({ error: 'You must provide email, username, and password'});
        }
        try {
            const createdUser = await User.create({
                email,
                username,
                password,
            });
            const user = createdUser.get({plain: true});
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.user = user;
                res.redirect('/todos');
            })
        } catch (e) {
            res.json(e);
        }
    },
    loginView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/todos');
        }
        res.render('login');
    },
    signupView: (req, res) => {
        if (req.session.loggedIn) {
            return res.redirect('/todos');
        }
        res.render('signup');
    },
    logout: (req, res) => {
        req.session.destroy(() => {
            res.send({ status: true });
        })
    },
};