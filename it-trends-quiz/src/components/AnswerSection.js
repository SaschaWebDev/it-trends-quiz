import React from "react";

const AnswerSection = (props) => {
  let { questions, handleCallBackRestartQuiz } = props;
  return (
    <div className="flex gap-2 flex-col max-w-4xl">
      <span className="text-3xl text-primary-100 font-bold mb-4 text-center select-none">
        Antworten
      </span>
      <div className="answer-section flex flex-col gap-4 max-w-lg">
        {questions.map((question, index) => (
          <div key={index} className="pt-10">
            <span
              key={"span-" + index}
              className="text-lg text-primary-100 font-bold mb-4 text-left select-none"
            >
              {index + 1}. {question.questionText}
            </span>
            <div
              key={"div-" + index}
              className="text-md text-primary-100 font-md select-none py-2 text-left"
            >
              {question.extraInfo}
            </div>
            {question.answerOptions.map((answer, indexAnswer) => (
              <div
                className={`${
                  answer.isCorrect ? "bg-green-700" : "bg-red-500 opacity-50"
                } flex outline-none px-6 rounded-lg text-button  disabled:text-primary-300 font-bold items-center justify-center text-base py-3 mt-2 select-none max-w-lg`}
                key={indexAnswer}
              >
                {answer.answerText}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        className="flex outline-none px-6 rounded-lg text-button bg-yellow-500 hover:bg-yellow-400 disabled:text-primary-300 font-bold items-center justify-center text-base py-3 mt-4 mx-20"
        onClick={() => handleCallBackRestartQuiz()}
      >
        Erneut versuchen
      </button>
    </div>
  );
};

export default AnswerSection;
