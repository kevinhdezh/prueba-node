"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('postgres', 'postgres', 'kevin123', {
    host: '',
    dialect: 'postgres',
    //logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map