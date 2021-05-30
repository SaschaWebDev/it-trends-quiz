import React from "react";

const IntroSection = (props) => {
  let { handleCallBackStartQuiz } = props;
  return (
    <div className="flex gap-2 flex-col">
      <span className="text-3xl text-primary-100 font-bold mb-4 text-center select-none">
        Quiz: Privacy Marketplace
      </span>
      <span className="text-md text-primary-100 font-md text-center select-none">
        Die Zeit beträgt 10 Minuten. Viel Erfolg!
      </span>
      <button
        className="flex outline-none px-6 rounded-lg text-button bg-red-700 hover:bg-red-600 disabled:text-primary-300 font-bold items-center justify-center text-base py-3 mt-2 mx-20"
        onClick={() => handleCallBackStartQuiz()}
      >
        Quiz Starten
      </button>
    </div>
  );
};

export default IntroSection;
