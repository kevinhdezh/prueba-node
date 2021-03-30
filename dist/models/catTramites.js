"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const CatTramites = connection_1.default.define('CatTramites', {
    id_tramite: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT
    }
}, {
    timestamps: false,
    tableName: 'CatTramites'
});
// CatTramites.belogsTo(Cita);
// Cita.belongsTo(CatTramites, {
//     foreignKey: 'myFooId'
//   });
exports.default = CatTramites;
//# sourceMappingURL=catTramites.js.map