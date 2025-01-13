import '../styles/footer.scss'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                        <h3 className='footer-title'>Fale com a gente!</h3>
                    <div className='footer-contact'>
                        <h4 className='footer-subtitle'>Central de Atendimento</h4>
                        <p className='footer-info'>11 5199-1283</p>
                    </div>

                    <div className='footer-contact'>
                        <h4 className='footer-subtitle'>Locação de imóveis</h4>
                        <p className='footer-info'>11 3876-2981</p>
                    </div>

                    <div className='footer-contact'>
                        <h4 className='footer-subtitle'>Compra e Venda de imóveis</h4>
                        <p className='footer-info'>11 91286-1387</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className='footer-title'>Institucional</h3>

                    <div>
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                <a href="">Sobre a ImobiliariaCase</a>
                            </li>

                            <li className='footer-item'>
                                <a href="">Nossas Lojas</a>
                            </li>

                            <li className='footer-item'>
                                <a href="">Fale conosco</a>
                            </li>

                            <li className='footer-item'>
                                <a href="">Ouvidoria</a>
                            </li>

                            <li className='footer-item'>
                                <a href="">Central de ajuda</a>
                            </li>

                            <li className='footer-item'>
                                <a href="">Mapa de Imóveis</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className='footer-title'>Minha Conta</h3>

                    <div>
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                <a href="">Área do Cliente</a>
                            </li>
                            <li className='footer-item'>
                                <a href="">2° via de boleto</a>
                            </li>

                            <li className='footer-item'>
                                <a href="">Vistoria</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="security-container">
                    <ul className='footer-legal'>
                        <li className='footer-legal-item'>
                            <a href="">Segurança e Prevenção a Fraudes</a>
                        </li>
                        <li className='footer-legal-item'>
                            <a href="">Termos de uso</a>
                        </li>

                        <li className='footer-legal-item'>
                            <a href=""> Política de Privacidade</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-copyright">
                    <p>&#169; Criado por Leandro Alves | Todos os direitos reservados</p>	
                </div>
            </div>
        </footer>
    )
}

export default Footer;