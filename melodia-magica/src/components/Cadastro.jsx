import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

function Signup() {
  const pathBase = "/PEXT-MELODIA-MAGICA";

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const [buttonClass, setButtonClass] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const checkFields = () => {
    if (name && email && pass && confirmPass && pass === confirmPass) {
      setBtnDisabled(false);
      setMsg("");
      resetButtonPosition();
    } else {
      setBtnDisabled(true);
      if (pass !== confirmPass) {
        setMsg("As senhas não coincidem!");
      } else {
        setMsg("Preencha todos os campos!");
      }
      shiftButton();
    }
  };

  const shiftButton = () => {
    const positions = ["loginButtonShiftLeft", "loginButtonShiftTop", "loginButtonShiftRight"];
    const nextPosition = positions[Math.floor(Math.random() * positions.length)];
    setButtonClass(nextPosition);
  };

  const resetButtonPosition = () => {
    setButtonClass("");
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch(id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "pass":
        setPass(value);
        break;
      case "confirmPass":
        setConfirmPass(value);
        break;
    }
    checkFields();
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginTitle}>Criar Conta</h2>
        <input
          type="text"
          id="name"
          placeholder="Nome Completo"
          className={styles.loginInput}
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          className={styles.loginInput}
          value={email}
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
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPass"
          placeholder="Confirme a Senha"
          className={styles.loginInput}
          value={confirmPass}
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
            id="signup-btn"
            disabled={btnDisabled}
            className={`${styles.loginButton} ${styles[buttonClass]}`}
            onClick={(event) => {
              if (btnDisabled) {
                event.preventDefault();
                shiftButton();
              } else {
                // Lógica de cadastro aqui
                navigate("/");
              }
            }}
          >
            Cadastrar
          </button>
        </div>

        <div className={styles.loginExtraOptions}>
          <button 
            className={`${styles.socialButton} ${styles.signupButton}`}
            onClick={() => navigate(`${pathBase}/login`)}
          >
            Já tem conta? Faça Login
          </button>
          <div className={styles.socialLogin}>
            <button className={`${styles.socialButton} ${styles.socialButtonGoogle}`}>
              Cadastrar com Google
            </button>
            <button className={`${styles.socialButton} ${styles.socialButtonFacebook}`}>
              Cadastrar com Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;