import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Orcamento.css";
// import "@fontawesome/fontawesome-free/css/all.min.css";

const Orcamento = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // manipula as mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // valida os campos
    const { firstName, lastName, email, phone, message } = formData;
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        "service_23ymibh",
        "template_yuxmide",
        templateParams,
        "zCHoBkQe7c9pFQgwG"
      )
      .then(
        (response) => {
          alert("Formulário enviado com sucesso!");
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div  id="orcamento" className="orcamento-container">
      <div className="orcamento-text">
        <h1>
          Solicite agora o seu 
          <br />
           orçamento <span className="highlight">gratuito</span>
        </h1>
        <p className="finan">
          Financiamos todos os sistemas sem <br />
          entrada em até <strong>84 parcelas!</strong>
        </p>
      </div>

      <div className="orcamento-form-container">
        <form className="orcamento-form" onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                Primeiro Nome <span className="form-asterisco">*</span>
              </label>
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
              <label htmlFor="lastName">
                Sobrenome <span className="form-asterisco">*</span>
              </label>
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
            <label htmlFor="email">
              E-mail <span className="form-asterisco">*</span>
            </label>
            <div className="input-with-icon">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourmail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i className="fas fa-envelope"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Telefone <span className="form-asterisco">*</span>
            </label>
            <div className="input-with-icon">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(55) 00000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <i className="fas fa-phone"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Mensagem <span className="form-asterisco">*</span>
            </label>
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
