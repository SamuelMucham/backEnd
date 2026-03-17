import {response, Router} from "express";
import alunosController from "./constrollers/alunos"
import cursosController from "./constrollers/cursos"

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
//cursos
routes.get("/cursos", cursosController.list); 
routes.get("/cursos/:id", cursosController.getByid);
routes.post("/cursos", cursosController.create);
routes.put("/cursos/:id", cursosController.update);
routes.delete("/cursos/:id", cursosController.delet);


export default routes;