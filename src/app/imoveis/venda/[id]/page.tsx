"use client"

import { useEffect, useState } from "react";

interface Property{
    id: string;
    title: string;
    location: string;
    price: string;
}

interface PropertyDetailsProps{
    params: { id: string };
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({params}) => {
    const { id } = params;
    const [property, setProperty] = useState<Property | null>(null);

    return(
        <div>
            <h1>Detalhes do imovel</h1>
            <p>id do imovel {id}</p>
        </div>
    )
}

export default PropertyDetails;