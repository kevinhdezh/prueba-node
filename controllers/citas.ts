import { Request, Response } from "express";
import Cita from '../models/cita';

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

    try {
        const existeId= await Cita.findOne({
            where:{
                id_cita: body.id_cita
            }
        });

        if(existeId){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el id ' + body.id_cita
            });
        }

        const citas = new Cita(body);
        await citas.save();

        res.json(citas);
        
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