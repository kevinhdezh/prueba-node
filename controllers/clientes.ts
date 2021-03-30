import { Request, Response } from "express";
import Cliente from '../models/cliente';


export const getClientes = async(req:Request, res: Response)=>{

    const clientes = await Cliente.findAll();
    res.json(clientes)
}

export const getCliente = async(req:Request, res: Response)=>{
    
    const {id}= req.params;
    
    const cliente = await Cliente.findByPk(id);

    if(cliente){
        res.json(cliente);
    }else{
        res.status(404).json({
            msg: `No hay usuario con id ${id}`
        })
    }

}

export const postCliente = async(req:Request, res: Response)=>{
    
    const {body}= req;

    console.log(body)

    try {
        const existeId= await Cliente.findOne({
            where:{
                id_cliente: body.id_cliente
            }
        });

        if(existeId){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el id ' + body.id_cliente
            });
        }

        const cliente = new Cliente(body);
        await cliente.save();

        res.json(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const putCliente = async(req:Request, res: Response)=>{
    
    const {id} = req.params;
    const {body}= req;

    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id '+ id
            });
        } 

        await cliente.update(body);

        res.json(cliente);

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        })
    }
}

export const deleteCliente = async(req:Request, res: Response)=>{
    
    const {id} = req.params;

    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id '+ id
        });
    } 

    await cliente.destroy();

    res.json(cliente);
}