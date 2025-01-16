"use client"
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import '../styles/navigation.scss';
import Link from "next/link";

//images
import Image from "next/image"
import imobiliariaWallpaper from '../../../public/imobiliariaWallpaper.jpg';
import imobiliaria from '../../../public/imobiliaria.png';


const Navigation = () => {

    return(
        <>
            <header className="header">
                <Image src={imobiliaria} alt="Logo da imobiliaria" height={124} width={124}/>
                <nav className="header_navigation">
                    <ul className="navigation_list">
                        <Link href="/" className="navigation_item">
                            Home
                        </Link>
                        <Link href="/About" className="navigation_item">
                            A Empresa
                        </Link>
                        <Link href="/sign-up-imovel" className="navigation_item">
                            Cadastre seu Imóvel
                        </Link>
                        <Link href="/contact" className="navigation_item">
                            Contato
                        </Link>
                    </ul>
                </nav>
                <div className="header_contact">
                    <div className="contact_item">
                        <p>Comercial</p>
                        <span>(11) 3807-4376</span>
                    </div>
                    <div>
                        .
                    </div>

                    <div className="contact_item">
                        <p>WhatsApp</p>
                        <span>
                            <FaWhatsapp className="contact_whatsapp-icon"/> (11) 98876-3587
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation;