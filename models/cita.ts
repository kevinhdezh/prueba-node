import {DataTypes} from 'sequelize';
import db from '../db/connection'

const Cita = db.define('Cita',{
    id_cita:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    id_cliente:{
        type: DataTypes.INTEGER
    },
    folio:{
        type: DataTypes.STRING
    },
    fecha_cita:{
        type: DataTypes.DATE
    },
    hora_cita:{
        type: DataTypes.STRING
    },
    id_estatus:{
        type: DataTypes.INTEGER
    },
    id_lugar:{
        type: DataTypes.INTEGER
    },
    id_tramite:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    tableName: 'Cita'
})


export default Cita;