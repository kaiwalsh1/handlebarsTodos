const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config');
const User = require('./models/User');

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3301;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
})

