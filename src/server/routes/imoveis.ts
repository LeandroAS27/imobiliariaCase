import express, { Request, Response } from "express";
import { getImoveis } from "../getData";
import { sql } from "../db";
import { error } from "console";

interface PersonalData {
    personal_nome: string;
    personal_email: string;
    personal_telefone_res: string;
    personal_telefone_celular: string;
    personal_cep_dp: string;
    personal_address_dp: string;
    personal_numero: string;
    personal_bairro: string;
    personal_complemento: string;
    personal_cidade: string;
    personal_estado: string;
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
    imovel_tipo: string;
    imovel_pretensao: string;
    imovel_bairro: string;
    imovel_cidade: string;
    imovel_estado: string;
}

interface RequestBody {
    personalData: PersonalData;
    imovelData: ImovelData;
}

const router = express.Router();

const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

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

router.post("/sign-up-imovel", upload.array('images'), async (req: Request, res: Response) => {
    try {

        let { personalData, imovelData } = req.body

        if(typeof imovelData === 'string'){
            try {
                imovelData = JSON.parse(imovelData);
            } catch (error) {
                res.status(400).json({ error: "erro ao processar dados do imovel"})
            }
        }

        console.log("Dados recebidos12", req.body);

        if(!personalData || !imovelData){
            res.status(404).json({ error: "Dados incompletos. Verifique os campos pessoais e do imovel"});
            return;
            
        }


        const requiredPersonalFields: (keyof PersonalData)[] = [
            "personal_nome", "personal_email", "personal_telefone_res", "personal_telefone_celular", "personal_cep_dp", "personal_address_dp", "personal_numero",
            "personal_bairro", "personal_complemento", "personal_cidade", "personal_estado"
        ];

        for (let field of requiredPersonalFields){
            if(!personalData[field as keyof PersonalData]){
                res.status(400).json({ error: `Campo ${field} esta faltando nos dados pessoais.`});
                return;
            }
        }

        const requiredImovelFields: (keyof ImovelData)[] = [
            "images", "title", "description", "area", "bedrooms", "bathrooms", "parkingspaces", "price", "imovel_tipo",
            "imovel_pretensao", "imovel_bairro", "imovel_cidade", "imovel_estado"
        ];

        for (let field of requiredImovelFields){
            if(!imovelData[field as keyof ImovelData]){
                res.status(400).json({ error: `Campo ${field} esta faltando nos dados do imovel.`});
                return;
            }
        }

        const personalResult = await sql`
            INSERT INTO users (
                personal_nome, personal_email, personal_telefone_res, personal_telefone_celular, 
                personal_cep_dp, personal_address_dp, personal_numero, personal_bairro, personal_complemento, personal_cidade, personal_estado
            ) VALUES (
                ${personalData.personal_nome}, 
                ${personalData.personal_email}, 
                ${personalData.personal_telefone_res}, 
                ${personalData.personal_telefone_celular}, 
                ${personalData.personal_cep_dp}, 
                ${personalData.personal_address_dp}, 
                ${personalData.personal_numero}, 
                ${personalData.personal_bairro}, 
                ${personalData.personal_complemento}, 
                ${personalData.personal_cidade},
                ${personalData.personal_estado}
            )
                RETURNING id;
        `;

        const userId = personalResult[0].id;

        
            const imovelResult = await sql`
                    INSERT INTO imoveis(
                        user_id, images, title, description, area, bedrooms, bathrooms, parkingspaces, price, imovel_tipo, imovel_pretensao, imovel_cp_dp, imovel_numero,
                        imovel_endereco_dp, imovel_complemento, imovel_bairro, imovel_cidade, imovel_estado, imovel_valor_venda, imovel_valor_locacao, 
                        mais_detalhes, aceitou_termos, imovel_area_util, imovel_area_total
                    ) VALUES (
                        ${userId},
                        ${imovelData.images},
                        ${imovelData.title},
                        ${imovelData.description},
                        ${imovelData.area},
                        ${imovelData.bedrooms},
                        ${imovelData.bathrooms},
                        ${imovelData.parkingspaces},
                        ${imovelData.price},
                        ${imovelData.imovel_tipo},
                        ${imovelData.imovel_pretensao},
                        ${imovelData.imovel_cp_dp},
                        ${imovelData.imovel_numero},
                        ${imovelData.imovel_endereco_dp},
                        ${imovelData.imovel_complemento},
                        ${imovelData.imovel_bairro},
                        ${imovelData.imovel_cidade},
                        ${imovelData.imovel_estado},
                        ${imovelData.imovel_valor_venda},
                        ${imovelData.imovel_valor_locacao},
                        ${imovelData.mais_detalhes},
                        ${imovelData.aceitou_termos},
                        ${imovelData.imovel_area_util},
                        ${imovelData.imovel_area_total}

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