import {DataTypes} from 'sequelize'
import db from '../db/connection'

const CatEstatus = db.define('CatEstatus', {
    id_estatus:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    }
},{
    timestamps: false,
    tableName: 'CatEstatus'
});

export default CatEstatus;