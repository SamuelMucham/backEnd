import { Request, Response } from "express";
import {prisma} from "../../config/prisma";

export default {
    list: async (request: Request, response: Response) => {
        try{
        const users = await prisma.alunos.findMany();
        return response.status(200).json(users);
        } catch (e){
            console.log(e)
            return response.status(500).json();
        }
       
    },
    create: async(request: Request, response: Response)=> {
        try{
        const {nome, cpf, email, idade} = request.body
        const user = await prisma.alunos.create({
            data: {
                nome,
                cpf,
                email,
                idade,
            },
        });
        
        return response.status(201).json(user);
       } catch (e: any){
            switch(e.code){
                case "P2000": return.status()
            }
            return response.status(500).json()
        }
    },
    
    getByid: async (reqeust: Request, response: Response) =>{
        try{
            const { id } =reqeust.params;
        const user = await prisma .alunos.findUnique(
        {where:{
            id: +id
        }}
    )
    return response.status(200).json(user)
        }
         catch (e){
            console.log(e)
            return response.status(500).json()
        }
    },
    update: async (request: Request, response:Response)=> {
        try{
            const {id} = request.params;
        const {nome, idade, email, cpf} = request.body;
        const user = await prisma.alunos.update({
            data: {
                nome,
                idade,
                email,
                cpf
            },
            where:{ id: +id}
        })
        return response.status(200).json(user)
        }
         catch (e){
            console.log(e)
            return response.status(500).json()
        }
    },
    delet: async (request: Request, response:Response)=> {
        try{
            const {id} = request.params;
        const user = await prisma.alunos.delete({
            where:{
                id: +id
            }
        })
        return response.status(200).json(user)
    }
        catch (e){
            console.log(e)
            return response.status(500).json()
        }
}}