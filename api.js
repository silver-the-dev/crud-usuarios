import express from "express"
import { sql } from "./db.js"

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/usuarios', async (req, res) => {
    try {
        const userId = req.query.id;
        const result = await sql`SELECT * FROM usuarios WHERE id = ${userId}`;
        res.send(result);
    } catch(err){
        console.error(err);
    }
});

app.post('/usuarios', async (req, res) => {
    try{
        const usr = req.body;
        const result = await sql`INSERT INTO usuarios(nome, email, senha) VALUES(${usr.nome}, ${usr.email}, ${usr.senha}) RETURNING *`;
        console.log(usr.nome);
        console.log(result);
        res.send(result);
    } catch(err){
        console.error(err);
    }
});


app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});