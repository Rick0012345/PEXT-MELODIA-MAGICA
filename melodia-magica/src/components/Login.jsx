import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [usersDatabase, setUsersDatabase] = useState([
    { username: "admin", password: "123456" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ]);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("login");

  const handleLogin = () => {
    const user = usersDatabase.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setMessage("Login bem-sucedido!");
      navigate("/home");
    } else {
      setMessage("Usuário ou senha incorretos.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (mode === "login") {
        handleLogin();
      } else if (mode === "register") {
        handleRegister();
      } else if (mode === "forgotPassword") {
        handleForgotPassword();
      }
    }
  };

  const handleRegister = () => {
    if (!username || !password) {
      setMessage("Preencha todos os campos.");
      return;
    }

    const userExists = usersDatabase.some((user) => user.username === username);

    if (userExists) {
      setMessage("Usuário já cadastrado.");
    } else {
      setUsersDatabase([...usersDatabase, { username, password }]);
      setMessage("Usuário registrado com sucesso!");
      setMode("login");
    }
  };

  const handleForgotPassword = () => {
    const userExists = usersDatabase.some((user) => user.username === username);

    if (userExists) {
      setMessage("Instruções de recuperação enviadas ao seu e-mail.");
    } else {
      setMessage("Usuário não encontrado.");
    }
  };

  return (
    <div className="login-container" tabIndex="0" onKeyDown={handleKeyDown}>
      <h1>MELODIA MÁGICA</h1>
      <h1>{mode === "login" ? "Login" : mode === "register" ? "Registrar" : "Recuperar Senha"}</h1>
      
      <input
        type="text"
        className="login-input"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      {mode !== "forgotPassword" && (
        <input
          type="password"
          className="login-input"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      
      {mode === "login" && (
        <button className="login-button" onClick={handleLogin}>
          Entrar
        </button>
      )}
      
      {mode === "register" && (
        <button className="login-button" onClick={handleRegister}>
          Registrar
        </button>
      )}
      
      {mode === "forgotPassword" && (
        <button className="login-button" onClick={handleForgotPassword}>
          Recuperar Senha
        </button>
      )}
      
      {message && (
        <p className={message.includes("sucesso") || message.includes("enviadas") 
          ? "message-success" 
          : "message-error"}>
          {message}
        </p>
      )}
      
      <p>
        {mode !== "register" && (
          <a className="login-link" onClick={() => setMode("register")}>
            Registrar
          </a>
        )}
        
        {mode !== "forgotPassword" && mode === "login" && (
          <> | <a className="login-link" onClick={() => setMode("forgotPassword")}>
                Esqueceu a senha?
              </a></>
        )}
        
        {mode !== "login" && (
          <> | <a className="login-link" onClick={() => setMode("login")}>
                Voltar ao Login
              </a></>
        )}
      </p>
    </div>
  );
}

export default Login;