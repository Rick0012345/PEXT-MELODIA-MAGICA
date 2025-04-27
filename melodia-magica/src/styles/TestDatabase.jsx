import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TestDatabase.css';

const TestDatabase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const createTestUser = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      const response = await axios.post('http://localhost:8000/users/test');
      setUserData(response.data);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.detail || 'Erro ao criar usuário de teste');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-database">
      <h2>Teste de Conexão com o Banco de Dados</h2>
      
      <div className="test-form">
        <button onClick={createTestUser} className="test-button">
          Criar Usuário de Teste
        </button>
      </div>

      {loading && (
        <div className="loading">
          Carregando...
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {success && (
        <div className="success">
          Usuário criado com sucesso!
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestDatabase; 