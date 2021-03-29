"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const CatLugares = connection_1.default.define('CatLugares', {
    id_lugar: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    municipio: {
        type: sequelize_1.DataTypes.STRING
    },
    jornada_inicio: {
        type: sequelize_1.DataTypes.STRING
    },
    jornada_fin: {
        type: sequelize_1.DataTypes.STRING
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT
    }
}, {
    timestamps: false,
    tableName: 'CatLugares'
});
exports.default = CatLugares;
//# sourceMappingURL=catLugares.js.map