"use client"

import { useState } from "react";
import '../styles/question.scss';

interface FAQItem{
    question: string;
    answer: string | JSX.Element;
}

const Questions: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const items = [
        {   question: "O que faz uma imobiliária?",
            answer: `O papel de uma imobiliária é oferecer suporte completo em processos de locação, compra ou qualquer outro tipo de transação imobiliária. Além disso, garantir segurança e facilidade aos inquilinos, proprietários e compradores.
            Também é função da imobiliária verificar, por exemplo, se todos os documentos fornecidos estão adequados, 
            além de checar se o imóvel se encontra em estados habitáveis para ser ofertado.`
        },

        {
            question: "Por que contar com uma imobiliária?",
            answer: "O principal motivo para contar com uma imobiliária é a segurança e o suporte no fechamento de contratos. Além desses fatores, a imobiliária possui um amplo conhecimento do mercado e fica responsável pelas negociações entre as partes interessadas."
        },

        {
            question: "Como verificar a credibilidade da imobiliária?",
            answer: `Fechar um negócio com uma imobiliária de confiança é fundamental para evitar fraudes e dores de cabeça durante o processo. A principal dica para verificar se uma imobiliária é confiável ou não, é entrar no site do CRECI (Conselho Regional de Corretores de Imóveis) 
            do estado, e consultar se a empresa está regular e consta com o status Ativo.`
        },

        {
            question: "O que pesquisar antes de alugar ou comprar um imóvel?",
            answer: (
                <>
                    <p>
                    Saber o que pesquisar antes de alugar ou comprar um imóvel é essencial. É um momento de muitas escolhas,
                    documentações e muitas outras coisas. Mas você pode simplificar esse processo contando com o apoio de
                    uma imobiliária especialista no assunto.
                    </p>
                    <button className="faq-contact-button" onClick={() => toggleItem}> {/* aqui vai redirecionar para a pagina fale conosco */}
                        Fale Conosco
                    </button>
                </>
            )
        }
    ]

    return(
        <section className="faq-container-main">
            <div className="faq-container">
                <h1>Dúvidas frequentes</h1>

                <ul className="faq-list">
                    {items.map((items, index) => (
                        <li     
                            key={index}
                            className={`faq-item ${activeIndex === index ? "active" : ''}`}
                        >
                            <button className="faq-question" onClick={() => toggleItem(index)}>
                                {items.question}
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                                {items.answer}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Questions;