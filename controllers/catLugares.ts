import { Request, Response } from "express";
import CatLugares from '../models/catLugares';

export const getCatLugares = async(req:Request, res: Response)=>{

    const catLugares = await CatLugares.findAll();
    res.json(catLugares)
}

export const getCatLugar = async(req:Request, res: Response)=>{
    
    const {id}= req.params;
    
    const catLugares = await CatLugares.findByPk(id);

    if(catLugares){
        res.json(catLugares);
    }else{
        res.status(404).json({
            msg: `No hay lugar con id ${id}`
        })
    }

}

export const postCatLugar = async(req:Request, res: Response)=>{
    
    const {body}= req;

    try {
        const existeId= await CatLugares.findOne({
            where:{
                id_lugar: body.id_lugar
            }
        });

        if(existeId){
            return res.status(400).json({
                msg: 'Ya existe un lugar con el id ' + body.id_lugar
            });
        }

        const catLugares = new CatLugares(body);
        await catLugares.save();

        res.json(catLugares);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const putCatLugar = async(req:Request, res: Response)=>{
    
    const {id} = req.params;
    const {body}= req;

    try {
        const catLugares = await CatLugares.findByPk(id);
        if (!catLugares) {
            return res.status(404).json({
                msg: 'No existe un lugar con el id '+ id
            });
        } 

        await catLugares.update(body);

        res.json(catLugares);   
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const deleteCatLugares = async(req:Request, res: Response)=>{
    
    const {id} = req.params;

    const catLugares = await CatLugares.findByPk(id);
    if (!catLugares) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id '+ id
        });
    } 

    await catLugares.destroy();

    res.json(catLugares);
}