const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require('../config/config');
require('dotenv').config()
const db = {};
// commit
let sequelize;
sequelize = new Sequelize({
    database: "fuel_management_system",
    username: "root",
    host: "localhost",
    dialect: "mysql",
    port: "3306",
    password: "root",  //do not push this line of code
  });
if (sequelize) {
    console.log("connection with db")
} else {
    console.log("can't connect with db")
}

// }

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach((file) => {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
