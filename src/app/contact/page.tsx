import Footer from '../components/footer';
import '../styles/contact.scss'

const Contact = () => {

    //adicionar a logica do formulario

    return(
        <>
            <section className="contact">
                <div className="contact-container">
                    <h1 className="contact-title">Contatos</h1>

                    <div className="contact-content">
                        <div className="contact-form-section">
                            <p className="contact-description">Para obter mais informações sobre anúncios, cadastros e dúvidas entre em
                                contato conosco através de nossos telefones, e-mail ou preenchendo o formulário abaixo.
                            </p>
                            <form className="contact-form">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder='Nome*' 
                                    required
                                    className='contact-form-input'
                                />
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder='E-mail*' 
                                    required
                                    className='contact-form-input'
                                />
                                <input 
                                    type="text" 
                                    name="telefone" 
                                    placeholder='Telefone*' 
                                    required
                                    className='contact-form-input'
                                />
                                <input 
                                    type="text" 
                                    name="Assunto" 
                                    placeholder='Assunto*' 
                                    className='contact-form-input'
                                />
                                <textarea 
                                    name="mensagem" 
                                    placeholder='Mensagem*'
                                    className='contact-form-textarea'
                                ></textarea>

                                <label className="signup-imovel_privacy">
                                    <input 
                                        className="signup-imovel_checkbox" 
                                        type="checkbox" 
                                        name="aceitou_termos" 
                                        value="politica_de_privacidade" 
                                        required
                                    />
                                    <span>
                                    Ao informar meus dados, eu concordo com a <a href="">Politica de Privacidade</a>
                                    </span>
                                </label>
                                <div></div>
                                <button className="signup-imovel_button" type="submit">ENVIAR</button>
                            </form>
                        </div>
                            <div className="contact-info-section">
                                <h3 className="contact-subtitle">UNIDADE 1</h3>
                                <p className="contact-address">Av. teste</p>

                                <p className="contact-sales">Vendas:
                                    <a href="#">(11) 93471.1209</a>
                                </p>
                                <p className="contact-rental">Locação:
                                    <a href="#">(11) 93261.1932</a>
                                </p>

                                <h3 className='contact-subtitle'>Horário de funcionamento</h3>
                                <p className='contact-hours'>Segunda a sexta-feira das 8:15h às 18h.</p>
                                <p className='contact-hours'>Sábado: das 8h às 13h</p>
                            </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Contact;