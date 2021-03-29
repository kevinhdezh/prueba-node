import express, {Application} from 'express'
import userRoutes from '../routes/cliente';
import citaRoutes from '../routes/cita';
import catTramiteRoutes from '../routes/catTramite';
import catEstatusRoutes from '../routes/catEstatus';
import catLugaresRoutes from '../routes/catLugares';


import cors from 'cors';

import db from '../db/connection';

class Server{
    private app: Application;
    private port: string ;
    private apiPaths = {
        clientes: '/api/clientes',
        cita: '/api/citas',
        catTramites: '/api/catTramites',
        catEstatus: '/api/catEstatus',
        catLugares: '/api/catLugares'
    }

    constructor(){
        this.app= express();
        this.port = process.env.PORT || '8000';

        //conectar db
        this.dbConnection();

        //middlewares
        this.middlewares();

        //definir rutas
        this.routes();

    }

    //bd
    async dbConnection(){

        try {

            await db.authenticate();
            console.log('Database on');
            
        } catch (error) {
            throw new Error(error)
        }
    }


    middlewares(){
        //cors
        this.app.use( cors());

        //lectura body
        this.app.use( express.json());

        //carpeta publica
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.clientes, userRoutes),
        this.app.use(this.apiPaths.cita, citaRoutes),
        this.app.use(this.apiPaths.catTramites, catTramiteRoutes),
        this.app.use(this.apiPaths.catEstatus, catEstatusRoutes),
        this.app.use(this.apiPaths.catLugares, catLugaresRoutes)
    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto '+ this.port);
        })
    }
}

export default Server;