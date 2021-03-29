"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const CatEstatus = connection_1.default.define('CatEstatus', {
    id_estatus: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'CatEstatus'
});
exports.default = CatEstatus;
//# sourceMappingURL=catEstatus.js.map