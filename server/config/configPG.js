const { Sequelize } = require('sequelize');

const { PG_URI } = process.env;

const db = {};
const sequelize = new Sequelize(PG_URI);
db.sequelize = sequelize;
db.Movies = require('../models/movies')(sequelize, Sequelize);

module.exports = db;
