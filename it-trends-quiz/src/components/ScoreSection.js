import React from "react";

const ScoreSection = (props) => {
  let {
    score,
    timer,
    totalTime,
    questionLength,
    handleCallBackShowAnswers,
    handleCallBackRestartQuiz,
  } = props;
  return (
    <div className="flex gap-2 flex-col">
      <span className="text-3xl text-primary-100 font-bold mb-4 text-center select-none">
        Ergebnis
      </span>
      <div className="text-md font-medium select-none">
        {score} / {questionLength} richtige Antworten in{" "}
        {new Date((totalTime - timer) * 1000).toISOString().substr(14, 5)}{" "}
        Minuten
      </div>
      <div className="text-md font-medium select-none">
        {score < 8 ? (
          <div>
            <span className="text-red-500 select-none">
              Ergebnis unter 50 %. Leider nicht bestanden.
            </span>
            <br />
            <span className="text-red-500 select-none">
              Schaue in die{" "}
              <a
                href={
                  window.location.href + "Ausarbeitung_Privacy_Marketplace.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Ausarbeitung
              </a>{" "}
              und versuche es erneut.
            </span>
          </div>
        ) : score >= 8 && score < 10 ? (
          <div>
            <span className="text-yellow-500 select-none">
              Ergebnis 50-60 % und somit ausreichend.
            </span>
            <br />
            <span className="text-yellow-500 select-none">
              Schaue in die{" "}
              <a
                href={
                  window.location.href + "Ausarbeitung_Privacy_Marketplace.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Ausarbeitung
              </a>{" "}
              und verbessere das Ergebnis.
            </span>
          </div>
        ) : score >= 10 && score <= 12 ? (
          <div>
            <span className="text-yellow-500 select-none">
              Ergebnis über 60-80 % und somit befriedigend.
            </span>
            <br />
            <span className="text-yellow-500 select-none">
              Schaue in die{" "}
              <a
                href={
                  window.location.href + "Ausarbeitung_Privacy_Marketplace.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Ausarbeitung
              </a>{" "}
              und verbessere das Ergebnis.
            </span>
          </div>
        ) : score > 12 && score <= 14 ? (
          <div>
            <span className="text-green-500 select-none">
              Ergebnis über 80 %-90 % und somit gut.
            </span>
            <br />
            <span className="text-green-500 select-none">
              Schaue in die{" "}
              <a
                href={
                  window.location.href + "Ausarbeitung_Privacy_Marketplace.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Ausarbeitung
              </a>{" "}
              und verbessere das Ergebnis.
            </span>
          </div>
        ) : (
          <div>
            <span className="text-green-500 select-none">
              Perfektes Ergebnis!
            </span>
            <br />
            <span className="text-green-500 select-none">
              Schaue in die{" "}
              <a
                href={
                  window.location.href + "Ausarbeitung_Privacy_Marketplace.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Ausarbeitung
              </a>{" "}
              und vertiefe dein Wissen.
            </span>
          </div>
        )}
        <div className="flex mt-4">
          <button
            className="flex outline-none px-6 rounded-lg text-button bg-blue-700 hover:bg-blue-600 disabled:text-primary-300 font-bold items-center justify-center text-base py-3 mt-2 mr-4 select-none"
            onClick={() => handleCallBackShowAnswers(true)}
          >
            Antworten einsehen
          </button>
          <button
            className="flex outline-none px-6 rounded-lg text-button bg-green-700 hover:bg-green-600 disabled:text-primary-300 font-bold items-center justify-center text-base py-3 mt-2 select-none"
            onClick={() => handleCallBackRestartQuiz()}
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreSection;
