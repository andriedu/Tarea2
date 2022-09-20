import { Request,Response } from "express";
import { User } from "../entities/user.entity";

export const createUser = async (req :Request,res: Response) =>{
    try {
        const {nombre,apellido} =req.body;
        const user =new User();
        user.nombre=nombre;
        user.apellido=apellido;
        await user.save();
        
        console.log(user);
        return res.json(user);

    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}
export const getUsers = async (req :Request,res: Response)=>{
    try {
        const users= await User.find();
        return res.json(users);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

export const updateUser = async (req :Request,res: Response)=>{
    try {
        const {id}=req.params;
        const user = await User.findOneBy({id: parseInt(id)});
        if(!user){ return res.status(404).json({message:"El Usuario no exite"})};
        await User.update({id:parseInt(id)}, req.body);
        return res.json('Recibido');
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

export const deleteUser = async (req :Request,res: Response)=>{
    try {
        const {id}=req.params;
        const result=await User.delete({id: parseInt(id)});
        if(result.affected == 0){
            return res.status(404).json({message:'Usuario no encontrado'});
        }
        return res.sendStatus(204);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

export const getUser = async (req :Request,res: Response)=>{
    try {
        const {id}=req.params;
        const user=await User.findOneBy({id: parseInt(id)});
        return res.json(user);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}