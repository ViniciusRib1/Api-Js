import express from "express";



const app = express(); // Guardar o servidor em uma variável app
// Fala para o app que está o servidor do express ouvir a porta 3000 
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/BomDia", (req, res) => {
    res.status(200).send("Boas Vindas á api legalzinha kk");
});
