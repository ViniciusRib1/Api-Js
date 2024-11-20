import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();


routes(app);


// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando em http://localhost:3000/posts");
});