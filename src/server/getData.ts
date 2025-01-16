// "use server";
// import { sql } from "./db";

// export async function getImoveis(){
//     const data = await sql`
//         SELECT * FROM imoveis;
//     `;
//     return data;
// }

// (async () => {
//     try {
//         const imoveis = await getImoveis();
//         console.log("Dados dos imoveis", imoveis);
//     } catch (error) {
//         console.error("Erro ao buscar imoveis", error);
//     }
// })();