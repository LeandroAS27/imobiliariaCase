"use client"
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import '../styles/navigation.scss';

//images
import Image from "next/image"
import imobiliariaWallpaper from '../../../public/imobiliariaWallpaper.jpg';
import imobiliaria from '../../../public/imobiliaria.png';

interface FiltersProps{
    intention: string;
    propertyType: string;
    region: string;
    minPrice: number;
    maxPrice: number;
    rooms: number;
    vacancies: number;
    area: number;
}

const Navigation = () => {
    const [filters, setFilters] = useState<FiltersProps>({
        intention: 'buy',
        propertyType: 'any',
        region: '',
        minPrice: 0,
        maxPrice: 10000000,
        rooms: 1,
        vacancies: 1,
        area: 50,
    });

    const handleSubmit = () => {

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }))
    }

    return(
        <>
            <header className="header">
                <Image src={imobiliaria} alt="Logo da imobiliaria" height={124} width={124}/>
                <nav className="header_navigation">
                    <ul className="navigation_list">
                        <li className="navigation_item">
                            Home
                        </li>
                        <li className="navigation_item">
                            A Empresa
                        </li>
                        <li className="navigation_item">
                            Cadastre seu Imovel
                        </li>
                        <li className="navigation_item">
                            Contato
                        </li>
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

            {/* sessao principal */}
            <main>
                <section className="home">
                    <div className="home-title">
                        <h1>ImobiliariaCase</h1>
                        <p>Seu novo lar começa aqui.</p>
                    </div>
                
                    <div className="search-filter">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="filter-item">
                                <label htmlFor="intention">Pretensão</label>
                                <select 
                                name="intention" 
                                id="intention"
                                value={filters.intention}
                                onChange={handleChange}
                                >       
                                    <option value="buy">Comprar</option>
                                    <option value="rent">Alugar</option>
                                </select>
                            </div>

                            {/* filtro de tipo de imovel */}

                            <div className="filter-item">
                                <label htmlFor="propertyType">Tipo de imóvel</label>
                                <select 
                                name="propertyType" 
                                id="propertyType"
                                value={filters.propertyType}
                                onChange={handleChange}
                                >
                                    <option value="">Qualquer</option>
                                    <option value="Casa">Casa</option>
                                    <option value="Apartamento">Apartamento</option>
                                    <option value="Terreno">Terreno</option>
                                </select>
                            </div>

                            {/* filtro de busca por regiao */}
                            <div className="filter-item">
                                <label htmlFor="region">Busca por região</label>
                                <input 
                                type="text" 
                                name="region" 
                                id="region" 
                                value={filters.region}
                                onChange={handleChange}
                                placeholder="Busque por endereço, bairro ou código"
                                />
                            </div>

                            {/* filtro de preco de venda */}
                            <div className="filter-item">
                                <label htmlFor="minPrice">Preço mínimo</label>
                                <input 
                                type="number" 
                                name="minPrice" 
                                id="minPrice"
                                value={filters.minPrice} 
                                onChange={handleChange}
                                min="0"
                                />
                            </div>
                            <div className="filter-item">
                                <label htmlFor="maxPrice">Preço Máximo</label>
                                <input 
                                type="number" 
                                name="maxPrice" 
                                id="maxPrice"
                                value={filters.maxPrice}
                                onChange={handleChange}
                                min="0"
                                />
                            </div>

                            {/* filtro de quartos */}
                            <div className="filter-item">
                                <label htmlFor="rooms">Quartos</label>
                                <select 
                                name="rooms" 
                                id="rooms"
                                value={filters.rooms}
                                onChange={handleChange}
                                >
                                    <option value="1">1 Quarto</option>
                                    <option value="2">2 Quartos</option>
                                    <option value="3">3 Quartos</option>
                                    <option value="4">4 Quartos</option>
                                </select>
                            </div>

                            {/* filtro de vagas */}
                            <div className="filter-item">
                                <label htmlFor="vacancies">Vagas</label>
                                <select 
                                name="vacancies" 
                                id="vacancies"
                                value={filters.vacancies}
                                onChange={handleChange}
                                >
                                    <option value="1">1 Vaga</option>
                                    <option value="2">2 Vagas</option>
                                    <option value="3">+3 Vagas</option>
                                </select>
                            </div>

                            {/* filtro de area */}
                            <div className="filter-item">
                                <label htmlFor="area">Área (m²)</label>
                                <input 
                                type="number" 
                                name="area" 
                                id="area" 
                                value={filters.area}
                                onChange={handleChange}
                                min="0"
                                />
                            </div>

                            {/* botao para buscar */}
                            <button type="submit" className="btn-filter">
                                Buscar
                            </button>
                        </form>
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default Navigation