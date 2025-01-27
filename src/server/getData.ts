"use server";
import { sql } from "./db";

export async function getImoveis(){
    try {
        const data = await sql`
            SELECT * FROM imoveis;
        `;
        return data;
    } catch (error) {
        console.error("Erro ao buscar imoveis", error)
        throw new Error("Nao foi possivel buscar os imoveis.")
    }
}

export async function getImovelById(id: string){
    try {
        const data = await sql`
            SELECT * FROM imoveis WHERE id = ${id};
        `
        return data[0];
    } catch (error) {
        console.error(`Erro ao buscar o imovel com ID ${id}`, error)
    }
}