import express from "express";
import { getImoveis } from "../getData";

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        console.log("Buscando imoveis...");
        const imoveis = await getImoveis();
        console.log("Imoveis encontrados", imoveis)
        res.status(200).json(imoveis)
    }catch(error){
        console.error("Erro ao buscar imoveis:", error);
        res.status(500).json({error: "Erro ao buscar imoveis"});
    }
})

export default router