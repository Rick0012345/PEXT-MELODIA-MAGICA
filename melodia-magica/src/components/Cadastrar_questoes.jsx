import React, { useState } from 'react';
import "../styles/CadastrarQuestoes.css";

const Textarea = ({ value, onChange, placeholder, className }) => (
    <textarea
        className={`input-field ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

const Input = ({ value, onChange, placeholder, className }) => (
    <input
        className={`input-field ${className}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

const Select = ({ value, onChange, options, className }) => (
    <select className={`input-field ${className}`} value={value} onChange={onChange}>
        <option value="">Selecione a resposta correta</option>
        {options.map((_, index) => (
            <option key={index} value={index}>
                Resposta {index + 1}
            </option>
        ))}
    </select>
);

const CadastrarQuestoes = () => {
    const [questao, setQuestao] = useState('');
    const [respostas, setRespostas] = useState(['', '', '', '']);
    const [respostaCorreta, setRespostaCorreta] = useState('');

    const handleAdicionarQuestao = () => {
        const novaQuestao = { questao, respostas, respostaCorreta };
        console.log('Questão cadastrada:', novaQuestao);
        setQuestao('');
        setRespostas(['', '', '', '']);
        setRespostaCorreta('');
    };

    const handleRespostaChange = (index, value) => {
        const novasRespostas = [...respostas];
        novasRespostas[index] = value;
        setRespostas(novasRespostas);
    };

    return (
        <div className="container" id='container_cadastrar_questoes' >
            <h1 className="title">Cadastrar Questões</h1>
            <div className="questao-container">
                <label className="label-questao">Questão:</label>
                <Textarea
                    className="textarea-questao"
                    value={questao}
                    onChange={(e) => setQuestao(e.target.value)}
                    placeholder="Digite a questão aqui"
                />
            </div>
            <div className="respostas-container">
                <h3 className="titulo-respostas">Respostas:</h3>
                {respostas.map((resposta, index) => (
                    <div className="resposta-input" key={index}>
                        <Input
                            className="input-resposta"
                            value={resposta}
                            onChange={(e) => handleRespostaChange(index, e.target.value)}
                            placeholder={`Resposta ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="resposta-correta-container">
                <label className="label-resposta-correta">Resposta Correta:</label>
                <Select
                    className="select-resposta-correta"
                    value={respostaCorreta}
                    onChange={(e) => setRespostaCorreta(e.target.value)}
                    options={respostas}
                />
            </div>
            <button className="button" onClick={handleAdicionarQuestao}>
                Adicionar Questão
            </button>
        </div>
    );
};

export default CadastrarQuestoes;