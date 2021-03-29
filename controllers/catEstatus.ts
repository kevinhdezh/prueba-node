import { Request, Response } from "express";
import CatEstatus from '../models/catEstatus';


export const getCatEstatus = async(req:Request, res: Response)=>{

    const catEstaus = await CatEstatus.findAll();
    res.json(catEstaus)
}

export const getCatEstatu = async(req:Request, res: Response)=>{
    
    const {id}= req.params;
    
    const catEstatus = await CatEstatus.findByPk(id);

    if(catEstatus){
        res.json(catEstatus);
    }else{
        res.status(404).json({
            msg: `No hay estatus con id ${id}`
        })
    }

}

export const postCatEstatus= async(req:Request, res: Response)=>{
    
    const {body}= req;

    try {
        const existeId= await CatEstatus.findOne({
            where:{
                id_estatus: body.id_estatus
            }
        });

        if(existeId){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el id ' + body.id_estatus
            });
        }

        const catEstatus = new CatEstatus(body);
        await catEstatus.save();

        res.json(catEstatus);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const putCatEstatus = async(req:Request, res: Response)=>{
    
    const {id} = req.params;
    const {body}= req;

    try {
        const catEstatus = await CatEstatus.findByPk(id);
        if (!catEstatus) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id '+ id
            });
        } 

        await catEstatus.update(body);

        res.json(catEstatus);

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const deleteCatEstatus = async(req:Request, res: Response)=>{
    
    const {id} = req.params;

    const catEstatus = await CatEstatus.findByPk(id);
    if (!catEstatus) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id '+ id
        });
    } 

    await catEstatus.destroy();

    res.json(catEstatus);
}