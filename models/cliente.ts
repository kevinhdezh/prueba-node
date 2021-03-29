import {DataTypes} from 'sequelize'
import db from '../db/connection'

const Cliente = db.define('Cliente', {
    id_cliente:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido_paterno:{
        type: DataTypes.STRING
    },
    apellido_materno:{
        type: DataTypes.STRING
    },
    domicilio:{
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    rfc:{
        type: DataTypes.STRING
    } 
},{
    timestamps: false,
    tableName: 'Cliente'
});

export default Cliente;