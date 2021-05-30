const questions = [
  {
    questionText: "Was ist der Privacy Marketplace?",
    extraInfo:
      "Die mediale Aufmerksamkeit und eine spürbar steigende Nachfrage nach Privatsphäre bleiben nicht unbemerkt. Es bildet sich vermehrt ein Marktangebot an Software, welches ganz gezielt Funktionen zum Schutz der Privatsphäre als Kerneigenschaft anbietet. Diese Angebote stellen den sogenannten Privacy Marketplace dar.",
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
    extraInfo:
      "Der Bereich der Privatsphäre wird als “on the Rise” eingestuft und befindet sich damit noch vor dem Höhepunkt der überhöhten Erwartungen. Es ist daher anzunehmen, dass sich dieser Sektor noch weiter vergrößern und die Erwartungen sowie die Investitionen und der Fortschritt in diesem Bereich über die nächsten Jahre wachsen wird.",
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
    extraInfo:
      "Die International Association of Privacy Professi-onals (IAPP) berichtet in Ihrem Tech Vendor Privacy 2020 Report von knapp 300 verschiedenen Anbietern, welches einem Vorjahreswachstum von annähernd 30 % entspricht.",
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
    extraInfo:
      "Ein Anbieter kann Zugangsdaten neu vergeben und somit die Sicherheit wiederherstellen. Bei einem Verlust an Daten im Bereich der Privatsphäre sind die Auswirkungen dazu diametral. Auch wenn ein Anbieter die Zugangsdaten dem rechtmäßigen Besitzer zurückgibt, bleiben die entwendeten persönlichen Daten, wie Geburtsdaten, Kontoverbindungen, E-Mail-Adressen oder intime Chatverläufe unumkehrbar für immer in freier Wildbahn.",
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
    extraInfo:
      "Sicherheit schützt Daten jeglicher Art, worunter auch persönliche Daten gehören.",
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
    extraInfo:
      "Sicherheitsdaten wie Accountzugänge oder private Schlüssel können durch Administratoren und Hersteller neu vergeben werden.",
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
    extraInfo:
      "Persönliche Daten der Privatsphäre wie Geburtsdaten, biographische Informationen oder Chatverläufe lassen sich, einmal verloren, lebenslang mit jemanden in Verbindung bringen.",
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
    extraInfo:
      "Zum einen wurden Sicherheitsmechanismen und sensible Zugangsdaten der Universität komprimiert, so dass die Sicherheit verletzt wurde, aber es wurden auch persönliche Informationen der Noten entwendet, welches die Privatsphäre verletzt.",
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
    extraInfo:
      "Die Leuphana hat keine Einwilligung eingeholt und persönliche Daten veröffentlicht, wodurch die Privatsphäre der Personen verletzt wurde, allerdings sind keine sicherheitsrelevanten Aspekte betroffen.",
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
    extraInfo:
      "Privatsphäre ist ein fundamentales Recht eines jeden Menschens und die lebenslangen Konsequzenzen beim Verlust persönlicher Daten übertreffen oftmals die Einschätzbarkeit des Individuums.",
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
    extraInfo:
      "Üblicherweise wollen Pazifisten nicht persönliche Daten entwenden, DevOps kümmern sich um den Betrieb von IT-Systemen im Unternehmen und White Hats melden freiwllig Sicherheitslücken ohne diese böswillig zu nutzen. Internationale Spionage von Staaten oder von sonstigen Hackern kann zum Verlust der Privatsphäre führen.",
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
    extraInfo:
      "Alleine im März diesen Jahres wurden Datensätze von über einer halben Milliarde Personen veröffentlicht. Diese umfassten E-Mail-Adressen, Anschriften, biografischen Informationen und Telefonnummern und wurden von der Plattform Facebook entwendet. Die meisten anderen großen Plattformen haben bereits Kundendaten verloren.",
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
    extraInfo:
      "Sogar WhatsApp bietet End-2-End-Verschlüsselung an und viele alternative Messenger haben selbstzerstörende Nachrichten.",
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
    extraInfo:
      "OTR steht für Off-The-Record und bietet durch technische Eigenschaften nach einem Gespräch eine plausible Abstreitbarkeit, dass dieses jemals stattgefunden hat. Steganographie bietet die Möglichkeit geheime Nachrichten in Trägermedien wie Bildern unterzubringen. End-2-End-Verschlüsselungen sichern Nachrichten für den Transportkanal zwischen zwei Geräten ab. OMEMO ist eine Weiterentwicklung von OTR.",
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
    extraInfo:
      "Signal bietet eine gute Ausgewogenheit zwischen Privatsphäre-Funktionen und Nutzbarkeit. Allerdings findet der Großteil der Finanzierung durch US-Unternehmen statt, weshalb zumindest Bedenken zu äußern sind. Matrix und XMPP-basierte Instant-Messenger bieten sehr gute Abdeckungen der Privatsphäre werden aber nur von wenigen genutzt und können kompliziert zu bedienen sein. Telegram bietet quasi keine reale Privatsphäre und ist zu vermeiden.",
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
