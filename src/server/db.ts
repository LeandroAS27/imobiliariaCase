"use server";
import { neon } from "@neondatabase/serverless";

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

if(!process.env.DATABASE_URL){
    throw new Error("DATABASE_URL não está definido. Verifique o arquivo .env.")
}

export const sql = neon(process.env.DATABASE_URL as string);

export async function queryDatabase(query: string, params: any[] = []){
    try {
        const result = await sql`${sql(query, ...params)}`;
        return result;
    } catch (error) {
        console.error("Erro ao consultar o banco de dados:", error);
        throw error;
    }
}