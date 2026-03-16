import express from "express";
import cors from "cors";
import routes from "./routes";

//inicializa o express
const app = express();

//define regras do servidor
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// consfigurar as rotas dentro do servidor
app.use(routes);

export default app;
