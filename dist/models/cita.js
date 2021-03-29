"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cita = connection_1.default.define('Cita', {
    id_cita: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER
    },
    folio: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_cita: {
        type: sequelize_1.DataTypes.DATE
    },
    hora_cita: {
        type: sequelize_1.DataTypes.STRING
    },
    id_estatus: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_lugar: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_tramite: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false,
    tableName: 'Cita'
});
exports.default = Cita;
//# sourceMappingURL=cita.js.map