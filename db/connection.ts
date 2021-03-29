import {Sequelize} from 'sequelize'

const db = new Sequelize('postgres','postgres','kevin123',{
    host: '',
    dialect:'postgres',
    //logging: false,
});

export default db;