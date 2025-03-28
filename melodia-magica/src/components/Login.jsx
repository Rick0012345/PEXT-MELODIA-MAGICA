
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

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const checkFields = () => {
    if (uname && pass) {
      setBtnDisabled(false);
      setMsg("");
      resetButtonPosition();
    } else {
      setBtnDisabled(true);
      shiftButton();
    }
  };

  const showMsg = () => {
    if (!uname || !pass) {
      setMsg("Não dê uma de Espertinho kkk");
    } else {
      setMsg("");
    }
  };

  const shiftButton = () => {
    showMsg();
    const positions = ["loginButtonShiftLeft", "loginButtonShiftTop", "loginButtonShiftRight"];
    const nextPosition = positions[Math.floor(Math.random() * positions.length)];
    setButtonClass(nextPosition);
  };

  const resetButtonPosition = () => {
    setButtonClass("");
  };

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
      <div className={styles.loginContainer}>
        <h2>Login</h2>
        <input
          type="text"
          id="uname"
          placeholder="Usuário"
          className={styles.loginInput}
          value={uname}
          onChange={handleInputChange}
        />
        <input
          type={showPassword ? "text" : "password"}
          id="pass"
          placeholder="Senha"
          className={styles.loginInput}
          value={pass}
          onChange={handleInputChange}
        />

        <div className={styles.loginShowPasswordContainer}>
          <input
            type="checkbox"
            id="show-password"
            className={styles.loginShowPasswordCheckbox}
            checked={showPassword}
            onChange={handlePasswordToggle}
          />
          <label htmlFor="show-password">Mostrar Senha</label>
        </div>

        <p className={styles.loginErrorMessage}>{msg}</p>

        <div className={styles.loginButtonContainer}>
          <button
            id="login-btn"
            disabled={btnDisabled}
            className={`${styles.loginButton} ${styles[buttonClass]}`}
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

        <div className={styles.loginExtraOptions}>
          <button className={`${styles.socialButton} ${styles.signupButton}`}>
            Cadastre-se
          </button>
          <a href="#" className={styles.forgotPasswordLink}>
            Esqueci minha senha
          </a>
          <div className={styles.socialLogin}>
            <button className={`${styles.socialButton} ${styles.socialButtonGoogle}`}>
              Login com Google
            </button>
            <button className={`${styles.socialButton} ${styles.socialButtonFacebook}`}>
              Login com Facebook
            </button>
          </div>
        </div>
      </div>

      <div className={styles.musicNotesContainer}>
        <span className={styles.musicNote}>🎵</span>
        <span className={styles.musicNote2}>🎶</span>
        <span className={styles.musicNote}>🎼</span>
      </div>
    </>
  );
}

export default App;