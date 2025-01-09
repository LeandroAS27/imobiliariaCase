import type { Metadata } from "next";
import { Montserrat, Lora } from "@next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700']});
const lora = Lora({subsets: ['latin'], weight: ['400', '700']});

export const metadata: Metadata = {
  title: "ImobiliariaCase",
  description: "Site de Venda, Compra e Aluguel de Imoveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} ${lora.className}`}>
        {children}
      </body>
    </html>
  );
}
