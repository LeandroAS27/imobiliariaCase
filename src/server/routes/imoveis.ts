import express, { Request, Response } from "express";
import { getImoveis } from "../getData";
import { sql } from "../db";
import { error } from "console";

interface PersonalData {
    nome: string;
    email: string;
    telefone_res: string;
    telefone_celular: string;
    cep_dp: string;
    address_dp: string;
    numero: string;
    bairro: string;
    complemento: string;
    cidade: string;
    estado: string;
}

interface ImovelData {
    images: string;
    title: string;
    description: string;
    area: string;
    bedrooms: number;
    bathrooms: number;
    parkingspaces: number;
    price: number;
}

interface RequestBody {
    personalData: PersonalData;
    imovelData: ImovelData;
}

const router = express.Router();

router.get("/imoveis", async (req, res) => {
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

router.get("/sign-up-imovel", (req, res) => {
    res.send("Router funcionando")
})

router.post("/sign-up-imovel", async (req: Request, res: Response) => {
    try {
        const { personalData, imovelData } = req.body;

        if(!personalData || !imovelData){
            res.status(404).json({ error: "Dados incompletos. Verifique os campos pessoais e do imovel"});
            return;
            
        }

        const requiredPersonalFields: (keyof PersonalData)[] = [
            "nome", "email", "telefone_res", "telefone_celular", "cep_dp", "address_dp", "numero",
            "bairro", "complemento", "cidade", "estado"
        ];

        for (let field of requiredPersonalFields){
            if(!personalData[field as keyof PersonalData]){
                res.status(400).json({ error: `Campo ${field} esta faltando nos dados pessoais.`});
                return;
            }
        }

        const requiredImovelFields: (keyof ImovelData)[] = [
            "images", "title", "description", "area", "bedrooms", "bathrooms", "parkingspaces", "price" 
        ];

        for (let field of requiredImovelFields){
            if(!imovelData[field as keyof ImovelData]){
                res.status(400).json({ error: `Campo ${field} esta faltando nos dados do imovel.`});
                return;
            }
        }

        const personalResult = await sql`
            INSERT INTO users (
                nome, email, telefone_res, telefone_celular, cep_dp, address_dp, numero, bairro, complemento, cidade, estado
            ) VALUES (
                ${personalData.nome}, 
                ${personalData.email}, 
                ${personalData.telefone_res}, 
                ${personalData.telefone_celular}, 
                ${personalData.cep_dp}, 
                ${personalData.address_dp}, 
                ${personalData.numero}, 
                ${personalData.bairro}, 
                ${personalData.complemento}, 
                ${personalData.cidade},
                ${personalData.estado}
            )
                RETURNING id;
        `;

        const userId = personalResult[0].id;

        const imovelResult = await sql`
                INSERT INTO imoveis(
                    images, title, description, area, bedrooms, bathrooms, parkingspaces, price
                ) VALUES (
                    ${imovelData.images},
                    ${imovelData.title},
                    ${imovelData.description},
                    ${imovelData.area},
                    ${imovelData.bedrooms},
                    ${imovelData.bathrooms},
                    ${imovelData.parkingspaces},
                    ${imovelData.price}
                )
                    RETURNING id;
            `;

        const imovelId = imovelResult[0].id;

        res.status(200).json({ message: "Dados recebidos e processados com sucesso!", userId, imovelId})
    } catch (error) {
        console.error("Erro ao processar os dados:", error)
        res.status(500).json({ error: `Erro ao processar os dados. ${error}`})
    }
})

export default router;