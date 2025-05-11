import React, { useState } from 'react';
import "../styles/CadastrarQuestoes.css";

const CadastrarQuestoes = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        nivel_dificuldade: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/questoes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Questão cadastrada com sucesso!');
                setFormData({
                    titulo: '',
                    nivel_dificuldade: 1
                });
            } else {
                alert('Erro ao cadastrar questão');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar questão');
        }
    };

    return (
        <div className='div-form'>
            <h2>Cadastrar Nova Questão</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Título da Questão:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="nivel_dificuldade">Nível de Dificuldade:</label>
                    <select
                        id="nivel_dificuldade"
                        name="nivel_dificuldade"
                        value={formData.nivel_dificuldade}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>Fácil</option>
                        <option value={2}>Médio</option>
                        <option value={3}>Difícil</option>
                    </select>
                </div>

                <button type="submit">Cadastrar Questão</button>
            </form>
        </div>
    );
};

export default CadastrarQuestoes;