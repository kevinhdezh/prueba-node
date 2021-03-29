import { Request, Response } from "express";
import CatTramites from '../models/catTramites';

export const getTramites = async(req:Request, res: Response)=>{

    const catTramites = await CatTramites.findAll();
    res.json(catTramites)
}

export const getTramite = async(req:Request, res: Response)=>{
    
    const {id}= req.params;
    const catTramite = await CatTramites.findByPk(id);

    if(catTramite){
        res.json(catTramite);
    }else{
        res.status(404).json({
            msg: `No hay usuario con id ${id}`
        })
    }

}

export const postCatTramite = async(req:Request, res: Response)=>{
    
    const {body}= req;

    try {
        const existeId= await CatTramites.findOne({
            where:{
                id_tramite: body.id_tramite
            }
        });

        if(existeId){
            return res.status(400).json({
                msg: 'Ya existe un tramite con el id ' + body.id_tramite
            });
        }

        const catTramite = new CatTramites(body);
        await catTramite.save();

        res.json(catTramite);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const putCatTramite = async(req:Request, res: Response)=>{
    
    const {id} = req.params;
    const {body}= req;

    try {
        const catTramite = await CatTramites.findByPk(id);
        if (!catTramite) {
            return res.status(404).json({
                msg: 'No existe un tramite con el id '+ id
            });
        } 

        await catTramite.update(body);

        res.json(catTramite);

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const deleteCatTramite = async(req:Request, res: Response)=>{
    
    const {id} = req.params;

    const catTramite = await CatTramites.findByPk(id);
    if (!catTramite) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id '+ id
        });
    } 

    await catTramite.destroy();

    res.json(catTramite);
}