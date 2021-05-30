import React, { useState, useEffect } from "react";

import questions from "./questions";
import IntroSection from "./components/IntroSection";
import QuizSection from "./components/QuizSection";
import ScoreSection from "./components/ScoreSection";
import AnswerSection from "./components/AnswerSection";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(600);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setShowScore(false);
    setShowAnswers(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimer(600);
  };

  useEffect(() => {
    if (quizStarted && !showScore && !showAnswers && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  });

  return (
    <div className="flex m-auto flex-col p-6 gap-5 bg-primary-800 rounded-lg z-10 sm:w-400 w-full mb-4">
      {showAnswers ? (
        <AnswerSection
          questions={questions}
          handleCallBackRestartQuiz={handleRestartQuiz}
        />
      ) : !quizStarted ? (
        <IntroSection handleCallBackStartQuiz={handleStartQuiz} />
      ) : showScore ? (
        <ScoreSection
          score={score}
          timer={timer}
          totalTime={600}
          questionLength={questions.length}
          handleCallBackShowAnswers={setShowAnswers}
          handleCallBackRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <QuizSection
          currentQuestion={currentQuestion}
          questions={questions}
          timer={timer}
          handleCallBackAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}
