import React, { useState } from "react";
import "./Orcamento.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Orcamento = () => {
  // Estados para controle dos valores do formulário
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+55",
    phone: "",
    message: "",
  });

  // Função para manipular mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div className="orcamento-container">
      {/* Texto do lado esquerdo */}
      <div className="orcamento-text">
        <h1>
          Solicite agora o seu<br />
          orçamento <span className="highlight">gratuito</span>
        </h1>
        <p className="finan">
          Financiamos todos os sistemas sem <br />
          entrada em até <strong>84 parcelas!</strong>
        </p>
      </div>

      {/* Formulário */}
      <div className="orcamento-form-container">
        <form className="orcamento-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Primeiro Nome <span className="form-asterisco">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nome"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Sobrenome <span className="form-asterisco">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Sobrenome"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail <span className="form-asterisco">*</span> </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourmail@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone <span className="form-asterisco">*</span> </label>
            <div className="telefone-input">
              <select
                name="countryCode"
                id="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+55"><i className="fas fa-flag" style={{ marginRight: '5px' }}></i>🇧🇷 +55</option>
                <option value="+1"><i className="fas fa-flag" style={{ marginRight: '5px' }}></i>🇺🇸 +1</option>
                <option value="+44"><i className="fas fa-flag" style={{ marginRight: '5px' }}></i>🇬🇧 +44</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(55) 00000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem <span className="form-asterisco">*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Enviar &rarr;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Orcamento;
