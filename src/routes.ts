import {response, Router} from "express";
import alunosController from "./constrollers/alunos"

const routes = Router();

routes.get("/", (request, response) => response.status(200).json ({succes: true}));

//rotas de alunos
//1°metodo
routes.get("/alunos", (request, response) => 
    alunosController.list(request, response))
//2°metodo
routes.get("/alunos", alunosController.list);
routes.get("/alunos/:id", alunosController.getByid);
routes.post("/alunos", alunosController.create);
routes.put("/alunos/:id", alunosController.update);
routes.delete("/alunos/:id", alunosController.delet);


export default routes;