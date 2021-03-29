import {DataTypes} from 'sequelize'
import db from '../db/connection'

const CatTramites = db.define('CatTramites', {
    id_tramite:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    activo:{
        type: DataTypes.TINYINT
    } 
},{
    timestamps: false,
    tableName: 'CatTramites'
});

export default CatTramites;