import React, { useState } from 'react';

const Menu = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('Cadastro realizado com sucesso!');
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  return (
    <>
      <div className="page">
        <h2>Formulário de Cadastro</h2>
        <form id="formCadastro" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input id="nome" name="nome" placeholder="Digite seu nome" type="text" />
          <div className="error-message" id="errorNome"></div>

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" placeholder="Digite seu email" type="email" />
          <div className="error-message" id="errorEmail"></div>

          <label htmlFor="telefone">Telefone:</label>
          <input id="telefone" name="telefone" placeholder="Digite seu telefone" type="tel" />
          <div className="error-message" id="errorTelefone"></div>

          <input type="submit" value="Cadastrar" />
        </form>

        {/* Mensagem de sucesso */}
        {successMessage && <div className="success-message">{successMessage}</div>}

        {/* Contêiner para os toasts */}
        <div id="toastContainer"></div>
      </div>
    </>
  );
};

export default Menu;