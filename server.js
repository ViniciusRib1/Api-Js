import express from "express";

// Uma lista que são os [] que possue objetos que são os {}
const posts = [
    {
      id: 1, 
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2, 
      descricao: "Um lindo pôr do sol na praia",
      imagem: "https://placeimg.com/640/480/nature"
    },
    {
      id: 3, 
      descricao: "Receita de bolo de chocolate irresistível",
      imagem: "https://picsum.photos/id/237/300/200"
    },
  ];

// Guardar o servidor em uma variável app
const app = express(); 
app.use(express.json());


// Fala para o app que está o servidor do express ouvir a porta 3000 
app.listen(3000, () => {
    console.log("Servidor escutando em http://localhost:3000/api");
});


app.get("/api", (req, res) => {
    res.status(200).send(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/api/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});