import React from "react";

const QuizSection = (props) => {
  let {
    currentQuestion,
    questions,
    timer,
    shuffleSeed,
    handleCallBackAnswerOptionClick,
  } = props;
  return (
    <>
      <div className="flex gap-2 flex-col">
        <span className="text-3xl text-primary-100 font-bold mb-4 text-center select-none">
          Quiz: Privacy Marketplace
        </span>
        <div className="text-primary-100 flex-wrap select-none">
          <span>
            Frage {currentQuestion + 1}/{questions.length}
          </span>
          <span className="ml-4 select-none">
            Verbleibende Zeit:{" "}
            {new Date(timer * 1000).toISOString().substr(14, 5)} Minuten
          </span>
        </div>
        <div className="text-red-400 flex-wrap select-none">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section flex flex-col gap-4">
        {questions[currentQuestion].answerOptions

          .map((answerOption, index) => (
            <button
              key={index}
              className="flex !outline-none px-6 rounded-lg text-button bg-primary-700 xs:active:bg-primary-600 xs:hover:bg-primary-700 hover:bg-primary-600 disabled:text-primary-700 font-bold items-center justify-center text-base py-3 mt-2 select-none"
              onClick={() =>
                handleCallBackAnswerOptionClick(answerOption.isCorrect)
              }
            >
              {answerOption.answerText}
            </button>
          ))
          .sort((a, b) => shuffleSeed)}
      </div>
    </>
  );
};

export default QuizSection;
