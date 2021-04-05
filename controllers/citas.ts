import { Request, Response } from "express";
import Cita from '../models/cita';
import {Op} from 'sequelize';
import moment from "moment";

export const getCitas = async(req:Request, res: Response)=>{

    const citas = await Cita.findAll();
    res.json(citas)
}

export const getCita = async(req:Request, res: Response)=>{
    
    const {id}= req.params;
    
    const citas = await Cita.findByPk(id);

    if(citas){
        res.json(citas);
    }else{
        res.status(404).json({
            msg: `No hay cita con id ${id}`
        })
    }

}

export const postCita = async(req:Request, res: Response)=>{
    
    const {body}= req;
    console.log(body)

    let cita={
        id_cita:0,
        id_cliente: body.id_cliente,
        folio:body.folio,
        fecha_registro:body.fecha_registro,
        fecha_cita:body.fecha_cita,
        hora_cita:body.hora_cita,
        id_estatus: body.id_estatus,
        id_lugar: body.id_lugar,
        id_tramite: body.id_tramite
    }

    const id = await Cita.max('id_cita').then(max => {
        return max as number;
    });
    cita.id_cita=id+1;
    console.log(cita);



    try {      

        const existeId = await Cita.findAll({
            where: {
                fecha_cita: {
                [Op.gte]: moment().toDate()
              }
            }
            
        }); 
        
        console.log(existeId);
        
        if (existeId.length>0){
            console.log('ok');
            for (let index = 0; index < existeId.length; index++) {
            
                const element = existeId[index] as any;
                console.log('******element',element.hora_cita);
                
                var horaInicio = moment(element.hora_cita,"HH:mm:ss");
                var duration = moment.duration({'hours':1});
    
                //var horaFin = horaInicio.add(moment.duration("01:00:00"));
    
                var horaFin = moment(element.hora_cita, "HH:mm:ss").add(1,'hour');
    
                var horaBody =  moment(cita.hora_cita,"HH:mm:ss"); 
    
                console.log('*******inicio',horaInicio,'---', element.hora_cita);
                console.log('*******fin',horaFin);
                console.log('********body',horaBody);
    
                if(horaBody.isBetween(horaInicio, horaFin,null,'[]')){
                    console.log('listo',horaFin);
                    return res.status(400).json({
                        msg: 'Hora ocupada '
                    });
                }else{
                    const citas = new Cita(cita);
                    await citas.save();
                    res.json(citas);
                }
                //console.log('***********',element)
            }
        }else{
            console.log('***********');
            const citas = new Cita(cita);
            await citas.save();
            res.json(citas);
        }
        

        // if(existeId){
        //     return res.status(400).json({
        //         msg: 'hay citas para esta fecha ' + body.fecha_cita
        //     });
        // }else{
        //     const citas = new Cita(cita);
        //     await citas.save();
        //     res.json(citas);
        // }

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const putCita = async(req:Request, res: Response)=>{
    
    const {id} = req.params;
    const {body}= req;

    try {
        const citas = await Cita.findByPk(id);
        if (!citas) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id '+ id
            });
        } 

        await citas.update(body);

        res.json(citas);

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const deleteCita = async(req:Request, res: Response)=>{
    
    const {id} = req.params;

    const citas = await Cita.findByPk(id);
    if (!citas) {
        return res.status(404).json({
            msg: 'No existe un cita con el id '+ id
        });
    } 

    await citas.destroy();

    res.json(citas);
}