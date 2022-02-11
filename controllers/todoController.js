const { Todo } = require('../models');
module.exports = {
	getAllTodos: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userTodosData = await Todo.findAll({
				where: {
					userId: req.session.user.id,
				}
			});
			res.render('todos', {
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),
				// currently logged in user
                user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
    
	createTodo: async (req, res) => {
		const { task } = req.body;
		try {
			const newTodo = await Todo.create({
				task,
				userId: req.session.user.id,
			});
			res.json({ newTodo });
		} catch (e) {
			res.json(e);
		}
	},
}