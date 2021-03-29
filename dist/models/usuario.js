"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cliente = connection_1.default.define('Cliente', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_paterno: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_materno: {
        type: sequelize_1.DataTypes.STRING
    },
    domicilio: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    rfc: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = Cliente;
//# sourceMappingURL=usuario.js.map