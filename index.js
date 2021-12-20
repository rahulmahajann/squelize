const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('postgres','postgres','roor',{
    host: 'localhost',
    dialect: 'postgresql',
    logging: false
})

sequelize.authenticate()
.then( ()=> {
    console.log('connected');
})
.catch(err => {
    console.log(err);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);

db.sequelize.sync()
.then(() => {
    console.log('synced')
})
.catch((err) => {
    console.log(err)
})

module.exports = db; 