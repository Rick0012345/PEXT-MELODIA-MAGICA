import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

function App() {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const [buttonClass, setButtonClass] = useState("");

  // Função para alternar visibilidade da senha
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Função para verificar campos de entrada e habilitar/desabilitar botão
  const checkFields = () => {
    console.log("Verificando campos: uname =", uname, ", pass =", pass);
    if (uname && pass) {
      setBtnDisabled(false);
      setMsg("");
      resetButtonPosition();
    } else {
      setBtnDisabled(true);
      console.log("Botão desativado, chamando shiftButton");
      shiftButton();
    }
  };

  // Função para mostrar mensagem de erro
  const showMsg = () => {
    if (!uname || !pass) {
      setMsg("Não dê uma de Espertinho kkk");
    } else {
      setMsg("");
    }
  };

  // Função para mover botão aleatoriamente
  const shiftButton = () => {
    showMsg();
    const positions = ["shift-left", "shift-top", "shift-right", "shift-bottom"];
    const nextPosition = positions[Math.floor(Math.random() * positions.length)];
    console.log("Nova classe do botão:", nextPosition);
    setButtonClass(nextPosition);
  };

  // Função para resetar posição do botão
  const resetButtonPosition = () => {
    console.log("Resetando posição do botão");
    setButtonClass("");
  };

  // Função para capturar entrada dos campos
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "uname") {
      setUname(value);
    } else if (id === "pass") {
      setPass(value);
    }
    checkFields();
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Login</h2>
        <input
          type="text"
          id="uname"
          placeholder="Usuário"
          value={uname}
          onChange={handleInputChange}
        />
        <input
          type={showPassword ? "text" : "password"}
          id="pass"
          placeholder="Senha"
          value={pass}
          onChange={handleInputChange}
        />

        <div className={styles.showPasswordContainer}>
          <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={handlePasswordToggle}
          />
          <label htmlFor="show-password">Mostrar Senha</label>
        </div>

        <p className={styles.msg}>{msg}</p>

        <div className={styles.btnContainer}>
          <button
            id="login-btn"
            disabled={btnDisabled}
            className={`${buttonClass}`}
            onClick={(event) => {
              if (btnDisabled) {
                event.preventDefault();
                shiftButton();
              }
            }}
          >
            Entrar
          </button>
        </div>

        <div className={styles.extraOptions}>
          <button
            className={`${styles.socialBtn} ${styles.signupBtn}`}
            id="signup-btn"
          >
            Cadastre-se
          </button>
          <a href="#" id="forgot-password">
            Esqueci minha senha
          </a>
          <div className={styles.socialLogin}>
            <button className={`${styles.socialBtn} ${styles.google}`}>
              Login com Google
            </button>
            <button className={`${styles.socialBtn} ${styles.facebook}`}>
              Login com Facebook
            </button>
          </div>
        </div>
      </div>

      <div className={styles.notesContainer}>
        <span className={styles.note}>🎵</span>
        <span className={styles.note}>🎶</span>
        <span className={styles.note}>🎼</span>
      </div>
    </>
  );
}

export default App;
