import { Request, Response } from "express";
import Cliente from '../models/cliente';
import { Sequelize } from 'sequelize';


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

    let persona={
        id_cliente:0,
        nombre: body.nombre,
        apellido_paterno:body.apellido_paterno,
        apellido_materno:body.apellido_materno,
        domicilio:body.domicilio,
        telefono:body.telefono,
        correo: body.correo,
        rfc: body.rfc
    }

    const id = await Cliente.max('id_cliente').then(max => {
        return max as number;
    });
    persona.id_cliente=id+1;
    
    try {
        const existeId= await Cliente.findOne({
            where:{
                rfc: body.rfc
            }
        });

        if(existeId){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el rfc ' + body.rfc
            });
        }else{
            const cliente = new Cliente(persona);
            await cliente.save();
            res.json(cliente);
        }

        
        
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