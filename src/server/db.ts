"use server";
import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL as string);

export async function getData() {
    const sql = neon(process.env.DATABASE_URL as string);
    const data = await sql`...`;
    return data;
}