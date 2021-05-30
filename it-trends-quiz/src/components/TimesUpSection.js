import React from "react";

const TimesUpSection = (props) => {
  let { handleCallBackRestartQuiz } = props;
  return (
    <div className="flex gap-2 flex-col">
      <span className="text-3xl text-primary-100 font-bold mb-4 text-center select-none">
        Zeit abgelaufen
      </span>
      <div className="text-md font-medium select-none text-red-400">
        Leider ist die Zeit vorbei. <br />
        <span className="text-red-400 select-none">
          Schaue in die{" "}
          <a
            href={window.location.href + "Ausarbeitung_Privacy_Marketplace.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Ausarbeitung
          </a>{" "}
          und versuche es erneut.
        </span>
        <div className="text-center mt-4">
          <button
            className="outline-none px-6 rounded-lg text-button bg-green-700 hover:bg-green-600 disabled:text-primary-300 font-bold text-base py-3 select-none margin-auto"
            onClick={() => handleCallBackRestartQuiz()}
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimesUpSection;
