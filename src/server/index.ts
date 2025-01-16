import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
// import { getImoveis } from "./getData";
import { neon } from "@neondatabase/serverless";
import { Pool } from "pg";

//carregar as variaveis do .env
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false},
})


async function getImoveis(){
    const sql = neon(process.env.DATABASE_URL as string); 

    try {
        const result = await pool.query("SELECT * FROM imoveis");
        return result.rows;
    } catch (error) {
        console.error("Erro ao buscar imoveis:", error)
        throw error;
    }
}



//rotas
app.get("/", (req, res) => {
    res.send("API do backend esta funcionando")
});

app.get("/imoveis", async (req, res) => {
    try {
        const imoveis = await getImoveis();
        res.json(imoveis);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar imoveis."});
    }
});

app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`)
})
