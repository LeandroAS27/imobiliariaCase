"use client"

import '../../../styles/imovelDetail.scss';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faShower, faRulerCombined, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../../../../../public/casaIcon.png';
import Footer from '@/app/components/footer';


interface Property{
    id: string;
    title: string;
    location: string;
    price: string;
    images: string[];
    bedrooms: number;
    bathrooms: number;
    parkingspaces: number;
    area: number;
    imovel_bairro: string;
}

interface PropertyDetailsProps{
    params: { id: string };
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({params}) => {
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`http://localhost:5000/imoveis/${params.id}`);
                if(!response.ok){
                    throw new Error("Erro ao buscar os dados do imovel")
                }
                const data:Property = await response.json();
                setProperty(data)
                console.log(data)
            } catch (error: any) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        fetchProperty();
    }, [params.id])

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        if(property?.images && property.images.length > 0){
            setCurrentImageIndex((prevIndex) =>
                prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    }

    const prevImage = () => {
        if(property?.images && property.images.length > 0){
            setCurrentImageIndex((prevIndex) => 
                prevIndex === 0 ? property?.images.length - 1 : prevIndex - 1
            );
        }
    };

    if(loading) return <p>Carregando os dados...</p>
    if(error) return <p>Erro no {error}</p>

    return(
        <>
            <section className="container">
                <h1>
                    Detalhes do imovel
                    Localizacao {property?.imovel_bairro}
                </h1>
                <p>id do imovel {params.id}</p>

                <div className="quadro-imagens">
                    {property?.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Imagem ${index + 1} do imovel ${property.title}`}
                            className="property-image"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>

                <div className="quadro-especificacoes">
                    <div className="row-especificacoes">
                        <div className="logo-principal">
                            <Image src={logo} alt="Logo da Empresa"/>
                        </div>
                        <div className="col-quartos">
                            <p><FontAwesomeIcon icon={faBed}/> {property?.bedrooms} Quartos</p>
                        </div>
                        <div className="col-banheiros">
                            <p><FontAwesomeIcon icon={faShower}/> {property?.bathrooms} Banheiros</p>
                        </div>
                        <div className="col-vagas">
                            <p><FontAwesomeIcon icon={faCar}/> {property?.parkingspaces} Vagas</p>
                        </div>
                        <div className="col-area">
                            <p><FontAwesomeIcon icon={faRulerCombined}/> {property?.area} m²</p>
                        </div>
                        <div className="col-right">
                            <div className="texto">
                                A partir de
                            </div>
                            <p>R$ {property?.price}</p>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && property!.images && (
                    <div className='modal-overlay' onClick={closeModal}>
                        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                            <button className='modal-close' onClick={closeModal}>
                                X
                            </button>
                        </div>
                        <div className='modal-image-container'>
                            <Image 
                                src={property?.images[currentImageIndex] || ""} 
                                alt={`Imagem aumentada ${currentImageIndex + 1}`} 
                                className='modal-image'
                                width={800}
                                height={600}
                            />
                        </div>
                        <div className='modal-navigation'>
                            <button>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                            </button>
                            <button className='modal-next' onClick={nextImage}>
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default PropertyDetails;