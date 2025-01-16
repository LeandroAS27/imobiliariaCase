import type { Metadata } from "next";
import { Montserrat, Lora } from "@next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700']});
const lora = Lora({subsets: ['latin'], weight: ['400', '700']});

export const metadata: Metadata = {
  title: "ImobiliariaCase",
  description: "Site de Venda, Compra e Aluguel de Imoveis",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} ${lora.className}`}>
        <Navigation/>
        <main>{children}</main>
      </body>
    </html>
  );
}
