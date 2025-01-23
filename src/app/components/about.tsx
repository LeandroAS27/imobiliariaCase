import '../styles/about.scss';
import Image from 'next/image';
import group from '../../../public/icons8-primeiro-plano-do-grupo-selecionado-96.png';
import calendar from '../../../public/icons8-calendário-96.png';
import building from '../../../public/icons8-prédio-96.png';
import house from '../../../public/icons8-casa-96.png';

const About = () => {
    return(
        <section className="about">
            <div className='about-container'>
                <div className='about-information'>
                    <h1 className='about-title'>Sobre a ImobiliariaCase</h1>
                    <p className='about-content'>Nossa trajetória foi construída com muito profissionalismo e dedicação, 
                        tendo como base a seriedade e a transparência no relacionamento com nossos clientes.
                        Nosso compromisso é garantir a total satisfação de todas as partes envolvidas em cada negociação.
                    </p>

                    <p className='about-content'>Com uma equipe de consultores experientes e altamente capacitados, acompanhamos você em todas as etapas, desde a escolha do imóvel ideal até o pós-venda. 
                        Oferecemos suporte completo para lidar com questões documentais e processos burocráticos, proporcionando mais tranquilidade e segurança.
                        Além disso, somos credenciados pelas principais instituições financeiras para prestar assessoria em financiamentos imobiliários e no uso do FGTS para aquisição de imóveis.
                    </p>

                    <p className='about-content'>Dispomos de uma ampla carteira de imóveis, tanto comerciais quanto residenciais, 
                        com foco em vendas e locação. Estamos sempre atentos às novas tendências do mercado, 
                        oferecendo as melhores soluções para atender às suas necessidades e superar suas expectativas.
                    </p>
                </div>
            </div>

            <div className='about-data'>
                <div className='about-grid'>
                    <div className='about-card'>
                        <div className='about-icon'>
                            <p><Image src={group} alt="Icone de um grupo de pessoas"/></p>
                        </div>
                        <div className='about-text'>
                            <p className='about-subtitle'>Imoveis Comercializados</p>
                            <p className='about-description'>+ de 5.000</p>
                        </div>
                    </div>

                    <div className='about-card'>
                        <div className='about-icon'>
                            <p><Image src={calendar} alt="Icone de um calendario"/></p>
                        </div>
                        <div className='about-text'>
                            <p className='about-subtitle'>Fundada em</p>
                            <p className='about-description'>Julho de 1998</p>
                        </div>
                    </div>

                    <div className='about-card'>
                        <div className='about-icon'>
                            <p><Image src={building} alt="Icone de um predio"/></p>
                        </div>
                        <div className='about-text'>
                            <p className='about-subtitle'>Quantidade de Corretores</p>
                            <p className='about-description'>+ de 40</p>
                        </div>
                    </div>

                    <div className='about-card'>
                        <div className='about-icon'>
                            <p><Image src={house} alt="icone de uma casa"/></p>
                        </div>
                        <div className='about-text'>
                            <p className='about-subtitle'>Clientes Atendidos</p>
                            <p className='about-description'>+ de 60.000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-mission'>
                <div className="about-container">
                    <div className="about-row">
                        <div className="about-item">
                            <h2 className="about-title">MISSÃO</h2>
                            <p className="about-info">
                                Nosso propósito é construir pontes para um futuro onde cada cliente encontre o lar dos seus sonhos. 
                                Trabalhamos com empenho e cuidado para tornar cada processo de compra ou locação uma experiência única e satisfatória. 
                                Mais do que imóveis, entregamos histórias e momentos, criando espaços onde a felicidade e as memórias ganham vida.
                            </p>
                        </div>
                        <div className="about-item">
                            <h2 className="about-title">VISÃO</h2>
                            <p className="about-info">
                                Nosso objetivo é fortalecer nossa posição como referência regional, 
                                redefinindo padrões de qualidade e inovação no mercado imobiliário. 
                                Buscamos expandir nossa presença e influência, alcançando um crescimento sustentável de 50% até 2025, 
                                enquanto criamos soluções que impactam positivamente a vida de nossos clientes.
                            </p>
                        </div>
                    </div>
                    <div className="about-row">
                        <div className="about-item">
                            <h2 className="about-title">VALORES</h2>
                            <p className="about-info">
                            A ImoveisCase tem como política interna o contínuo aprimoramento e desenvolvimento de nossas técnicas de atendimento, apoiando nossos clientes e atendendo aos requisitos do segmento imobiliário, bem como cumprindo os requisitos legais, objetivando:
                            </p>
                            <ul className="about-values">
                                <li>Integridade: Comprometemo-nos a atuar com transparência, ética e responsabilidade, 
                                    construindo relações de confiança duradouras com nossos clientes, parceiros e colaboradores. A honestidade é a base de todas as nossas ações.</li>
                                <li>Excelência no Serviço ao Cliente: Colocamos nossos clientes no centro de tudo o que fazemos, oferecendo soluções personalizadas e experiências que superam expectativas. 
                                    Nosso compromisso é entregar valor real e criar momentos memoráveis em cada interação.</li>
                                <li>Inovação: Estamos sempre em busca de novas oportunidades para evoluir. Acreditamos que o uso de tecnologias modernas 
                                    e práticas inovadoras é essencial para liderar o setor imobiliário e atender às demandas de um mercado em constante transformação.</li>
                                <li>Trabalho em Equipe: Valorizamos a força da colaboração, reconhecendo que o sucesso vem do esforço coletivo. 
                                    Promovemos um ambiente de trabalho inclusivo e inspirador, onde cada contribuição é essencial para alcançar nossos objetivos comuns.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;