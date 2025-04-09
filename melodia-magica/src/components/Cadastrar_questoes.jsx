import React, { useState } from 'react';

const CadastrarQuestoes = () => {
    const [questao, setQuestao] = useState('');
    const [respostas, setRespostas] = useState(['', '', '', '']);
    const [respostaCorreta, setRespostaCorreta] = useState('');

    const handleAdicionarQuestao = () => {
        const novaQuestao = {
            questao,
            respostas,
            respostaCorreta,
        };
        console.log('Questão cadastrada:', novaQuestao);
        // Aqui você pode enviar a questão para um backend ou salvar no estado global
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
        <div>
            <h1>Cadastrar Questões</h1>
            <div>
                <label>Questão:</label>
                <textarea
                    value={questao}
                    onChange={(e) => setQuestao(e.target.value)}
                    placeholder="Digite a questão aqui"
                />
            </div>
            <div>
                <h3>Respostas:</h3>
                {respostas.map((resposta, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={resposta}
                            onChange={(e) => handleRespostaChange(index, e.target.value)}
                            placeholder={`Resposta ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div>
                <label>Resposta Correta:</label>
                <select
                    value={respostaCorreta}
                    onChange={(e) => setRespostaCorreta(e.target.value)}
                >
                    <option value="">Selecione a resposta correta</option>
                    {respostas.map((_, index) => (
                        <option key={index} value={index}>
                            Resposta {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleAdicionarQuestao}>Adicionar Questão</button>
        </div>
    );
};

export default CadastrarQuestoes;