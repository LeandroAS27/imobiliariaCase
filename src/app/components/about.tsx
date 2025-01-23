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
                    <p className='about-content'>Fundada em 1998 pelo arquiteto Luiz Carlos Castan, a Castan Imóveis tem sua história construída com muito profissionalismo e 
                        qualidade no atendimento, tendo como pilares a seriedade e a transparência com seus clientes, 
                        prezando pela total satisfação de todas as partes envolvidas.
                    </p>

                    <p className='about-content'>Contando com uma equipe de consultores altamente capacitada, a Castan te auxilia desde a escolha do seu imóvel até o pós-venda, 
                        deixando você despreocupado com qualquer problema relacionado à documentação e processos burocráticos. 
                        Também somos credenciados pelas principais instituições financeiras a prestar assessoria em financiamento 
                        imobiliário e resgate do FGTS para aquisição de imóveis.
                    </p>

                    <p className='about-content'>Com uma ampla carteira de imóveis na Mooca e região, somos especializados em vendas e locação de imóveis comerciais e residenciais, 
                        buscando sempre nos atualizar às novas tendências do mercado e oferecer as melhores opções para você!
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
                            Nossa missão é ser a chave para o lar perfeito. Viabilizamos a compra e locação do imóvel dos nossos clientes com paixão e dedicação. 
                            Nossa maior satisfação está em realizar os sonhos das pessoas, transformando casas em lares cheios de felicidade e significado.
                            </p>
                        </div>
                        <div className="about-item">
                            <h2 className="about-title">VISÃO</h2>
                            <p className="about-info">
                            Consolidar nossa liderança regional enquanto estabelecemos novos padrões de excelência, ampliando nosso alcance e impacto no mercado imobiliário, com crescimento de 50% até 2025.
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
                                <li>Integridade: Agir com honestidade, transparência e ética em todas as interações.</li>
                                <li>Excelência no Serviço ao Cliente: Priorizar as necessidades dos clientes, oferecendo serviços de alta qualidade e experiências memoráveis.</li>
                                <li>Inovação: Buscar continuamente novas maneiras de melhorar, adotando tecnologias emergentes e práticas inovadoras.</li>
                                <li>Trabalho em Equipe: Fomentar um ambiente colaborativo onde cada membro contribui com suas habilidades para alcançar objetivos comuns.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;