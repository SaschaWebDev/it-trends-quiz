const questions = [
  {
    questionText: "Was ist der Privacy Marketplace?",
    answerOptions: [
      { answerText: "Ein geheimer Markt in Istanbul", isCorrect: false },
      {
        answerText: "Ein sicheres Smart-Home von Phillips",
        isCorrect: false,
      },
      {
        answerText: "Angebote an Software mit Privatsphäre-Features",
        isCorrect: true,
      },
      {
        answerText: "Sichere Kleinanzeigen-Plattform von Twitter",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "In welchen Bereich des Gartner Hype Cycle wird Privacy eingestuft?",
    answerOptions: [
      { answerText: "Peak of Inflated Expectations", isCorrect: false },
      { answerText: "Plateau of Productivity", isCorrect: false },
      { answerText: "Trough of Disillusionment", isCorrect: false },
      { answerText: "On the Rise", isCorrect: true },
    ],
  },
  {
    questionText:
      "Wie viele Anbieter von Privacy Technologien gibt es laut der IAPP?",
    answerOptions: [
      { answerText: "60", isCorrect: false },
      { answerText: "120", isCorrect: false },
      { answerText: "250", isCorrect: false },
      { answerText: "300", isCorrect: true },
    ],
  },
  {
    questionText:
      "Die Folgen von verlorener Sicherheit und Privatsphäre sind ...",
    answerOptions: [
      { answerText: "gleich und beide wiederherstellbar", isCorrect: false },
      {
        answerText: "verschieden und beide wiederherstellbar",
        isCorrect: false,
      },
      {
        answerText: "gleich und nicht beide wiederherstellbar",
        isCorrect: false,
      },
      {
        answerText: "verschieden und nicht beide wiederherstellbar",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Sicherheit schützt Daten ...",
    answerOptions: [
      { answerText: "nur von Unternehmen", isCorrect: false },
      {
        answerText: "nur von Privatpersonen",
        isCorrect: false,
      },
      {
        answerText: "auch persönliche Daten",
        isCorrect: true,
      },
      {
        answerText: "nur persönliche Daten",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Daten der Sicherheit sind ...",
    answerOptions: [
      { answerText: "zurücksetzbar", isCorrect: true },
      {
        answerText: "nicht zurücksetzbar",
        isCorrect: false,
      },
      {
        answerText: "lebenslang identifizierend",
        isCorrect: false,
      },
      {
        answerText: "zum löschen da",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Daten der Privatsphäre sind ...",
    answerOptions: [
      { answerText: "zurücksetzbar", isCorrect: false },
      {
        answerText: "allgemein öffentlich",
        isCorrect: false,
      },
      {
        answerText: "lebenslang identifizierend",
        isCorrect: true,
      },
      {
        answerText: "zum löschen da",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Die Leuphana wird gehackt, alle Noten abgegriffen und veröffentlicht. Welche Bereiche wurden verletzt?",
    answerOptions: [
      { answerText: "Sicherheit und keine Privatsphäre", isCorrect: false },
      {
        answerText: "Privatsphäre und keine Sicherheit",
        isCorrect: false,
      },
      {
        answerText: "Keine Privatsphäre und keine Sicherheit",
        isCorrect: false,
      },
      {
        answerText: "Sicherheit und Privatsphäre",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Die Leuphana veröffentlicht ungefragt Namen, Alter und Studiengänge der Gewinner des jährlichen Salzkristalls. Welche Bereiche wurden verletzt?",
    answerOptions: [
      { answerText: "Sicherheit und keine Privatsphäre", isCorrect: false },
      {
        answerText: "Privatsphäre und keine Sicherheit",
        isCorrect: true,
      },
      {
        answerText: "Keine Privatsphäre und keine Sicherheit",
        isCorrect: false,
      },
      {
        answerText: "Sicherheit und Privatsphäre",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Der Schutz der Privatsphäre ist ...",
    answerOptions: [
      {
        answerText: "vernachlässigbar, wenn man nichts zu verbergen hat",
        isCorrect: false,
      },
      {
        answerText: "Sache des Individuums",
        isCorrect: false,
      },
      {
        answerText: "ein demokratischer Grundsatz",
        isCorrect: true,
      },
      {
        answerText: "nicht möglich",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Privatsphäre muss vor folgenden Akteuren geschützt werden: ",
    answerOptions: [
      {
        answerText: "Staaten, Pazifisten und Hacker",
        isCorrect: false,
      },
      {
        answerText: "Staaten, DevOps und Hacker",
        isCorrect: false,
      },
      {
        answerText: "Staaten, White Hats und Hacker",
        isCorrect: false,
      },
      {
        answerText: "Staaten und Hacker",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Schaffen es große Tech-Konzerne Privatsphäre der Nutzer zu wahren?",
    answerOptions: [
      {
        answerText:
          "Ja, die großen Plattformen verlieren wenn überhaupt wenige persönliche Daten",
        isCorrect: false,
      },
      {
        answerText:
          "Nein, auch FAANG-Unternehmen verlieren immer wieder Massen an persönliche Daten",
        isCorrect: true,
      },
      {
        answerText:
          "Ja, kleine und große Plattformen verlieren heutzutage keine persönlichen Daten",
        isCorrect: false,
      },
      {
        answerText:
          "Nein, sie veröffentlichen einfach ohne Erlaubnis persönliche Daten",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Bieten heutzutage Instant-Messenger Privatsphäre-Features an?",
    answerOptions: [
      {
        answerText: "Ja, spezielle Instant-Messenger bieten einige an",
        isCorrect: false,
      },
      {
        answerText:
          "Nein, Privatsphäre-Features sind in Instant-Messenger noch nicht angekommen",
        isCorrect: false,
      },
      {
        answerText:
          "Ja, Privatsphäre-Features sind in fast allen Instant-Messenger angekommen",
        isCorrect: true,
      },
      {
        answerText:
          "Nein, sie werden zwar eingebaut, sind aber nur vorgetäuscht",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Was sind gängige Privatsphäre-Features von Instant-Messenger?",
    answerOptions: [
      {
        answerText: "End-2-End-Verschlüsselung, OTR und APT",
        isCorrect: false,
      },
      {
        answerText: "Selbstzerstörende Nachricht, OTR und QWAP",
        isCorrect: false,
      },
      {
        answerText: "Steganographie, End-2-End-Verschlüsselung und OTR",
        isCorrect: true,
      },
      {
        answerText: "OTR, OMEMO und Multifunktionschat",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Was sind im Sinne der Privatsphäre sinnvolle Angebote an Instant-Messenger mit Privatsphäre-Features?",
    answerOptions: [
      {
        answerText: "Signal, Telegram und XMPP",
        isCorrect: false,
      },
      {
        answerText: "WhatsApp, Telegram und Matrix",
        isCorrect: false,
      },
      {
        answerText: "PrivNote, Matrix und Wire",
        isCorrect: false,
      },
      {
        answerText: "Matrix, XMPP und Signal",
        isCorrect: true,
      },
    ],
  },
];

export default questions;
