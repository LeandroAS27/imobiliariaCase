"use client"
import { useState } from 'react';
import '../styles/signImovel.scss';

const SignUpImovel = () => {
    const [formData, setFormData] = useState<{
        personalData: Record<string, string>;
        imovelData: Record<string, string>
    }>({
        personalData: {},
        imovelData: {},
    })

    const handleInputChange = (section: 'personalData' | 'imovelData', name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value,
            },
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dadosCompletos = {
            ...formData.personalData,
            ...formData.imovelData,
        }

        console.log("dados enviados", dadosCompletos)

        fetch("http://localhost:5000/sign-up-imovel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosCompletos),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Sucesso:", data)
            })
            .catch((error) => {
                console.error("Erro", error)
            })  
    }


    return(
        <section className="signup-imovel">
            <div className="signup-imovel_header">
                <h1 className="signup-imovel_title">Deseja Vender ou Alugar o seu imóvel?</h1>
            </div>
            <div className="signup-imovel_form-section"> {/* fundo cinza  */}
                <h3 className="signup-imovel_form-title">
                    <div className="signup-imovel_step-number">1</div>
                    <strong className="signup-imovel_step-title">DADOS PESSOAIS</strong>
                </h3>

                <form className="signup-imovel_form" onSubmit={handleSubmit}>
                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="nome" 
                        placeholder="Nome Completo*" 
                        required
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="email"
                        name="email" 
                        placeholder="E-mail*" 
                        required
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="tel" 
                        name="telefone_res"
                        placeholder="Telefone residencial*" 
                        required
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="tel" 
                        name="telefone_celular" 
                        placeholder="Telefone celular*" 
                        required
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="cep_dp" 
                        placeholder="CEP" 
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="address_dp" 
                        placeholder="Endereço" 
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                        <input 
                        className="signup-imovel_input" 
                        type="number" 
                        name="numero" 
                        placeholder="Número"
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)} 
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text"
                        name="bairro"
                        placeholder="Bairro" 
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="complemento" 
                        placeholder="Complemento" 
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="cidade" 
                        placeholder="Cidade" 
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <select 
                        className="signup-imovel_select" 
                        name="estado"
                        onChange={(e) => handleInputChange("personalData", e.target.name, e.target.value)}
                        >
                            <option value="">Estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                </form>
            
                {/* formulario de dados do imovel */}
                <h3 className="signup-imovel_form-title">
                    <div className="signup-imovel_step-number">2</div>
                    <strong className="signup-imovel_step-title">DADOS DO IMÓVEL</strong>
                </h3>
                <form className="signup-imovel_form" onSubmit={handleSubmit}>
                    <div className="signup-imovel_form-group">
                        <select 
                        className="signup-imovel_select" 
                        name="tipo" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        >
                            <option value="">Tipo*</option>
                            <option value="apartamento">Apartamento</option>
                            <option value="casa-comercial">Casa Comercial</option>
                            <option value="casa-sobrado">Casa Sobrado</option>
                            <option value="chacara">Chácara</option>
                            <option value="cobertura">Cobertura</option>
                            <option value="conjunto-comercial">Conjunto Comercial</option>
                            <option value="flat">Flat</option>
                            <option value="galpao">Galpão</option>
                            <option value="prédio-comercial">Prédio Comercial</option>
                            <option value="sala-comercial">Sala Comercial</option>
                            <option value="salao-comercial">Salão Comercial</option>
                            <option value="terreno">Terreno</option>
                        </select>
                    </div>

                    <div className="signup-imovel_form-group">
                        <select 
                        className="signup-imovel_select" 
                        name="property_pretension"
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        >
                            <option value="">Pretensão*</option>
                            <option value="Venda">Venda</option>
                            <option value="Locação">Locação</option>
                            <option value="Venda e Locação">Venda e Locação</option>
                        </select>
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="cep_imo" 
                        placeholder="CEP" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group signup-imovel__form-group--inline">
                        <input 
                        className="signup-imovel_input" 
                        type="text" name="endereco-imo" 
                        placeholder="Endereço*" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="numero-imo" 
                        placeholder="Número*" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="complemento_imo" 
                        placeholder="Complemento" 
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input"
                        type="text" 
                        name="bairro-imo" 
                        placeholder="Bairro*" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        type="text" 
                        name="cidade-imo" 
                        placeholder="Cidade*"
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                        <select 
                        name="uf_imo" 
                        id="address-uf" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        >
                            <option value="">Estado*</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="area_util" 
                        placeholder="Área útil" 
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="area_total" 
                        placeholder="Área total" 
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <select 
                        className="signup-imovel_select" 
                        name="dormitorios" 
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        >
                            <option value="">Dormitórios*</option>
                            <option value="1">1 Dormitório</option>
                            <option value="2">2 Dormitórios</option>
                            <option value="3">3 Dormitórios</option>
                            <option value="4">4 Dormitórios ou mais</option>
                        </select>
                    </div>

                    <div className="signup-imovel_form-group">
                        <select 
                        className="signup-imovel_select" 
                        name="vagas" 
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        >
                            <option value="">Vagas</option>
                            <option value="1">1 Vaga</option>
                            <option value="2">2 Vagas</option>
                            <option value="3">3 Vagas</option>
                            <option value="4">4 Vagas ou mais</option>
                        </select>
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="valor_venda" 
                        placeholder="Valor Venda"
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="signup-imovel_form-group">
                        <input 
                        className="signup-imovel_input" 
                        type="text" 
                        name="valor_locacao" 
                        placeholder="Valor locação" 
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                    </div>
                    
                    <div className="signup-imovel_form-group">
                        <textarea 
                        className="signup_imovel_textarea" 
                        name="mais_detalhes" 
                        placeholder="Mais detalhes" 
                        rows={4}
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        ></textarea>
                    </div>

                    <label className="signup-imovel_privacy">
                        <input 
                        className="signup-imovel_checkbox" 
                        type="checkbox" 
                        name="politica_de_privacidade" 
                        value="politica_de_privacidade" 
                        required
                        onChange={(e) => handleInputChange("imovelData", e.target.name, e.target.value)}
                        />
                        <span>
                            Ao informar meus dados, eu concordo com a <a href="">Politica de Privacidade</a>
                        </span>
                    </label>
                    <div></div>
                    <button className="signup-imovel_button" type="submit">ENVIAR</button>
                </form>
            </div>
        </section>
    )
}

export default SignUpImovel;