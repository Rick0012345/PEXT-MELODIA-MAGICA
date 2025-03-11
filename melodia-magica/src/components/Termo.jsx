import React from "react";
import "../styles/termo_rspns.css"; // Importando o arquivo CSS


function Termo({ mostrarTela }) {
  return (
    <div className="termo-container">
      { }
      <button 
        className="termo-button" 
        onClick={() => mostrarTela()} // Chama a função para esconder o Termo
      >
        Aceitar
      </button>
    </div>
  );
}

export default Termo;

// No Termo.jsx
function Termo() {
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem("termoAceito", "true"); // Salva no navegador
    navigate("/login"); // Redireciona
  };

  return (
    <div className="termo-container">
      {<div className="termo-container">
      <h1 className="termo-title">Termo de Uso e Política de Privacidade</h1>
      <p className="termo-text">
        Antes de acessar o quiz, você precisa aceitar nosso termo de responsabilidade.
        Ao continuar, você concorda com as condições estabelecidas. O Termo de Uso e a
        Política de Privacidade na Receita Federal foram elaborados em conformidade com
        a Lei Federal nº 12.965, de 23 de abril de 2014 (Marco Civil da Internet), e
        com a Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de
        Dados Pessoais).
      </p>
      
    </div>}
      <button className="termo-button" onClick={handleAccept}>
        Aceitar
      </button>
    </div>
  );
}