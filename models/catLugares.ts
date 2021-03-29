import {DataTypes} from 'sequelize'
import db from '../db/connection'

const CatLugares = db.define('CatLugares', {
    id_lugar:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    municipio:{
        type: DataTypes.STRING
    },
    jornada_inicio:{
        type: DataTypes.STRING
    },
    jornada_fin:{
        type: DataTypes.STRING
    },
    activo:{
        type: DataTypes.TINYINT
    } 
},{
    timestamps: false,
    tableName: 'CatLugares'
});

export default CatLugares;