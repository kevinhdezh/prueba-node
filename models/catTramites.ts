import {DataTypes} from 'sequelize'
import db from '../db/connection'
import Cita from './cita';



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


// CatTramites.belogsTo(Cita);
// Cita.belongsTo(CatTramites, {
//     foreignKey: 'myFooId'
//   });

export default CatTramites;