"use client";

import Image from "next/image";
import "../styles/highlights.scss"

//swiperAPI
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//icons
import { faBed, faCar, faShower, faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Property{
    images: string[];
    title: string;
    location: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    parkingSpaces: number;
    price: string;
}

const Properties: Property[] = [
    {
    images: ["/rental1.webp",],
    title: "Apartamento",
    location: "Zona Leste - São Paulo, SP",
    area: 250,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 2,
    price: 'R$ 5.000',
 },
    {
    images: ["/rental2.webp",],
    title: "Apartamento Luxuoso",
    location: "Zona Norte - São Paulo, SP",
    area: 200,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    price: 'R$ 8.000',
    },
    {
        images: ["/rental3.webp",],
        title: "Casa Luxuosa",
        location: "Zona Sul - Sao Paulo, SP",
        area: 300,
        bedrooms: 5,
        bathrooms: 4,
        parkingSpaces: 4,
        price: 'R$ 10.000',
        },
        {
            images: ["/rental3.webp",],
            title: "Casa Luxuosa",
            location: "Zona Leste - Sao Paulo, SP",
            area: 350,
            bedrooms: 5,
            bathrooms: 4,
            parkingSpaces: 4,
            price: 'R$ 15.000',
            },
]

const Rental: React.FC = () => {
    return(
        <>
            <section className="highlight-section">
                <h1>Destaques</h1>
                <h3>Imoveis para Alugar</h3>
                {/* carrossel dos imoveis */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination ]}
                >
                    {Properties.map((property, index) => (
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
                                        <p className="property-price">Alugue: {property.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Rental;