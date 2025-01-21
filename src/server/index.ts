import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { getImoveis } from "./getData";
// import { getData } from "./db";
import { Pool } from "pg";
import router from "./routes/imoveis";

//carregar as variaveis do .env
dotenv.config();

console.log("database", process.env.DATABASE_URL)

const app = express();
const port = 5000;

// Conexão com o banco de dados (Neon)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});


//middlewares
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());



//rotas
app.use("/", router);

app.get("/", (req, res) => {
    res.send("API do backend esta funcionando")
});


// app.get("/imoveis", async (req, res) => {
//     try {
//         const imoveis = await getImoveis();
//         res.json(imoveis);
//     } catch (error) {
//         res.status(500).json({error: "Erro ao buscar imoveis."});
//     }
// });

app.get("/sign-up-imovel", (req, res) => {
    res.send("formulario do imovel")
});

// app.post("/sign-up-imovel", async (req, res) => {
//     try {
//         console.log("Dados recebidos", req.body)
//         const dadosCompletos = req.body;
//         //direcionar os Dados completos para o Banco de dados
//         res.status(201).json({ message: "Dados recebidos e processados com sucesso."})
//     } catch (error) {
//         console.error("Erro no POST:", error);
//         res.status(500).json({ error: "Erro ao processar os dados."})
//     }
// })

app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`)
})
