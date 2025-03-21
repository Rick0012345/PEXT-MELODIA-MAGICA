import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";


function Menu({ }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="profile">Bem-vindo ao Quiz!</div>
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <button className="menu-button" onClick={() => navigate("/game_page")}>
            Iniciar Quiz
          </button>
        </li>
        <li className="menu-item">
          <button
            className="menu-button"
            onClick={() =>
              alert(
                "REGRAS DO QUIZ:\n1. Responda as perguntas: Você verá uma pergunta com várias opções de resposta. Escolha a opção que você acha correta.\n\n2. Pontuação: Você ganha 1 ponto por cada resposta correta.\n\n3. Resultado final: Ao final, você verá a quantidade de respostas corretas e sua pontuação total.\n\n4. Reiniciar: Você pode tentar o quiz novamente para melhorar sua pontuação."
              )
            }
          >
            Regras
          </button>
        </li>
        <li className="menu-item">
          <button
            className="menu-button"
            onClick={() =>
              alert(
                "Sobre o Melodia Mágica\n\nBem-vindo ao nosso Quiz Melodia Mágica! 🎶🎉\n\nAqui, as crianças podem aprender sobre música de maneira divertida e interativa, testando seus conhecimentos com perguntas sobre instrumentos musicais, sons, e muito mais! Nosso quiz foi criado especialmente para os pequenos, com perguntas fáceis e divertidas que tornam o aprendizado um verdadeiro jogo."
              )
            }
          >
            Sobre
          </button>
        </li>
      </ul>
      <button className="menu-button" onClick={() => navigate("/")}>
        Sair
      </button>
    </div>
  );
}

export default Menu;