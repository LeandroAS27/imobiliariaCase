"use client";

import Image from "next/image";
import "../styles/highlights.scss"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//swiperAPI
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//icons
import { faBed, faCar, faShower, faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

interface Property{
    id: string;
    images: string[];
    title: string;
    location: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    parkingSpaces: number;
    price: string;
    imovel_valor_locacao: string;
    imovel_valor_venda: string;
    imovel_pretensao: string;
}

const Highlights: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProperties(){
            try {
                const response = await fetch("http://localhost:5000/imoveis");
                if(!response.ok){
                    throw new Error("Erro ao buscar os imoveis")
                }
                const data = await response.json();
                const filteredData = data.filter((property: Property) => property.imovel_pretensao === "Venda")
                setProperties(filteredData)
                console.log(filteredData)
            } catch (error: any) {
                setError(error.message)
            }finally{
                setLoading(false);
            }
        }
        fetchProperties();
    }, [])

    console.log(properties)

    if(loading) return <p>Carregando imoveis...</p>;
    if(error) return <p>Erro: {error}</p>

    return(
        <>
            <section className="highlight-section">
                <h1>Destaques</h1>
                <h3>Imoveis para Venda</h3>
                {/* carrossel dos imoveis */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination ]}
                >
                    {properties.map((property, index) => (
                            <SwiperSlide key={index}>
                                <div className="property-slide">
                                    {/* carrossel de imagens do imovel */}
                                    <Swiper 
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        // navigation
                                        pagination={{ clickable: true }}
                                        modules={[Navigation, Pagination]}
                                        className="property-image-carousel"
                                    >
                                        {property.images.map((image, i) => (
                                            <SwiperSlide key={i}>
                                                <Image src={image} alt={`${property.title} - Imagem ${i + 1}`} 
                                                className="property-image" width={300} height={300}/>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                        {/* informacoes do imovel */}
                                    <div className="property-info">
                                        <h3 className="property-title">{property.title}</h3>
                                        <p className="property-location">{property.location}</p>
                                        <div className="property-icons">
                                            <div className="property-icon">
                                                <span><FontAwesomeIcon icon={faRulerCombined}/> Area: {property.area}m²</span>
                                            </div>
                                            <div className="property-icon">
                                                <span><FontAwesomeIcon icon={faBed}/> Quartos: {property.bedrooms}</span>
                                            </div>
                                            <div className="property-icon">
                                                <span><FontAwesomeIcon icon={faShower}/> Banheiros: {property.bathrooms}</span>
                                            </div>
                                            <div className="property-icon">
                                                <span><FontAwesomeIcon icon={faCar}/> Vagas: {property.parkingSpaces}</span>
                                            </div>
                                        </div>
                                        <p className="property-price">Venda: {property.price}</p>
                                        <Link
                                            href={`/imoveis/${property.imovel_pretensao.toLowerCase()}/${property.id}}`}
                                        >
                                            <button className="property-button">Saiba mais</button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Highlights;