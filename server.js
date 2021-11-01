const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utls/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sesh = {
    secret = 'ultra secret ooo',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({db: sequelize})
}

app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
});