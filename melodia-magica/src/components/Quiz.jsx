import React, { useState } from "react";
import "../styles/quiz.css"; // Importando o arquivo CSS
import { useNavigate } from "react-router-dom";

const Quiz = ({ }) => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Qual destes instrumentos é tocado com um arco?",
      options: ["Guitarra", "Violino", "Piano", "Flauta"],
      correctAnswer: 1,
    },
    {
      question: "O que é uma bateria?",
      options: [
        "Um instrumento de cordas",
        "Um instrumento de vento",
        "Um instrumento de percussão",
        "Um instrumento de teclas",
      ],
      correctAnswer: 2,
    },
    {
      question: "Qual destes instrumentos você toca assoprando?",
      options: ["Violão", "Trompete", "Cavaquinho", "Pandeiro"],
      correctAnswer: 1,
    },
    {
      question: "Qual é o nome do instrumento com teclas brancas e pretas?",
      options: ["Violão", "Harpa", "Trombone", "Piano"],
      correctAnswer: 3,
    },
    {
      question: "Qual destes instrumentos é tocado batendo com as mãos?",
      options: ["Violino", "Piano", "Pandeiro", "Guitarra"],
      correctAnswer: 2,
    },
    {
      question: "Qual destes instrumentos é conhecido por seu som grave?",
      options: ["Guitarra", "Contra-Baixo", "Violino", "Flauta"],
      correctAnswer: 1,
    },
    {
      question: "O que é uma flauta?",
      options: [
        "Um instrumento de cordas",
        "Um instrumento de percussão",
        "Um instrumento de vento",
        "Um instrumento de teclas",
      ],
      correctAnswer: 2,
    },
    {
      question: "Qual instrumento tem cordas?",
      options: ["Harpa", "Piano", "Pandeiro", "Trompete"],
      correctAnswer: 0,
    },
    {
      question:
        "Qual destes instrumentos possui teclas e cordas e é tocado com os dedos?",
      options: ["Acordeão", "Violão", "Piano", "Trompete"],
      correctAnswer: 0,
    },
    {
      question:
        "Qual instrumento musical é tocado com as mãos e tem um som metálico e brilhante?",
      options: ["Pandeiro", "Triângulo", "Maracas", "Harpa"],
      correctAnswer: 1,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (index) => {
    if (answered) return;

    const isCorrect = index === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correto!");
    } else {
      setFeedback("Errado!");
    }

    setAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(false);
      setFeedback("");
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <>
          <h1 className="quiz-question">
            {questions[currentQuestionIndex].question}
          </h1>
          <div className="quiz-options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="quiz-option-button"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          {answered && <p className="quiz-feedback">{feedback}</p>}
          <button className="quiz-next-button" onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1
              ? "Finalizar Quiz"
              : "Próxima Pergunta"}
          </button>
        </>
      ) : (
        <>
          <p className="quiz-result-message">
            Você acertou {score} de {questions.length} perguntas!
          </p>
          <button
            className="quiz-next-button"
            onClick={() => navigate("/")}
          >
            Voltar ao Menu
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;