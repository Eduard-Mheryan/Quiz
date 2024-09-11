function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const theme = getQueryParam('theme');
const questionsContainer = document.getElementById('questions-container');
const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resultContainer = document.getElementById('result-container');
const resultDisplay = document.getElementById('result');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

if (theme) {
    quizTitle.textContent = `Quiz für ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
    const questions = {
        mathe: [
            { question: 'Was ist 2 + 2?', answer: '4' },
            { question: 'Löse die Gleichung: 3x = 9', answer: '3' },
            { question: 'Was ist die Quadratwurzel von 16?', answer: '4' },
            { question: 'Was ist die Ableitung von x^2?', answer: '2x' },
            { question: 'Was ist das Integral von 1/x?', answer: 'ln(x)' },
            { question: 'Was ist 10% von 200?', answer: '20' },
            { question: 'Wie lautet der Wert von Pi (auf zwei Dezimalstellen)?', answer: '3.14' },
            { question: 'Was ist 7 mal 8?', answer: '56' },
            { question: 'Was ist die Fakultät von 5?', answer: '120' },
            { question: 'Was ist die Lösung der Gleichung: x^2 - 4 = 0?', answer: '2' }
        ],
        physik: [
            { question: 'Wie hoch ist die Lichtgeschwindigkeit?', answer: '299792458' },
            { question: 'Formuliere das zweite Newtonsche Gesetz.', answer: 'Kraft ist gleich Masse mal Beschleunigung' },
            { question: 'Wie lautet die Einheit der Kraft?', answer: 'Newton' },
            { question: 'Wie hoch ist die Erdbeschleunigung?', answer: '9.8' },
            { question: 'Wie lautet die Formel für kinetische Energie?', answer: '1/2 mv^2' },
            { question: 'Wie lautet die Einheit des elektrischen Widerstands?', answer: 'Ohm' },
            { question: 'Wer entwickelte die Relativitätstheorie?', answer: 'Einstein' },
            { question: 'Wie lautet die Einheit der Frequenz?', answer: 'Hertz' },
            { question: 'Wie lautet das erste Gesetz der Thermodynamik?', answer: 'Energie kann nicht erschaffen oder zerstört werden' },
            { question: 'Wie lautet die Formel für die potentielle Energie?', answer: 'mgh' }
        ],
        chemie: [
            { question: 'Wie lautet das chemische Symbol für Wasser?', answer: 'H2O' },
            { question: 'Wie hoch ist die Ordnungszahl von Kohlenstoff?', answer: '6' },
            { question: 'Wie lautet die chemische Formel für Methan?', answer: 'CH4' },
            { question: 'Wer entwickelte das Periodensystem?', answer: 'Mendeleev' },
            { question: 'Welchen pH-Wert hat reines Wasser?', answer: '7' },
            { question: 'Welches Gas nehmen Pflanzen bei der Photosynthese auf?', answer: 'Kohlendioxid' },
            { question: 'Wie lautet das chemische Symbol für Gold?', answer: 'Au' },
            { question: 'Wie hoch ist das Molekulargewicht von Sauerstoff?', answer: '16' },
            { question: 'Wie lautet die chemische Formel für Kochsalz?', answer: 'NaCl' },
            { question: 'Wie lautet die Ladung eines Protons?', answer: 'Positiv' }
        ],
        informatik: [
            { question: 'Wofür steht HTML?', answer: 'Hypertext Markup Language' },
            { question: 'Wie lautet die Zeitkomplexität der Binärsuche?', answer: 'Log n' },
            { question: 'Was ist die Hauptfunktion eines Compilers?', answer: 'Code in Maschinensprache umwandeln' },
            { question: 'Wofür steht CPU?', answer: 'Central Processing Unit' },
            { question: 'Welcher Port ist standardmäßig für HTTP vorgesehen?', answer: '80' },
            { question: 'Welche Programmiersprache wird hauptsächlich für Webentwicklung verwendet?', answer: 'JavaScript' },
            { question: 'Wie lautet die binäre Darstellung der Dezimalzahl 10?', answer: '1010' },
            { question: 'Wofür steht JSON?', answer: 'JavaScript Object Notation' },
            { question: 'Wie lautet die Zeitkomplexität von Bubble Sort?', answer: 'n^2' },
            { question: 'Wofür steht CSS?', answer: 'Cascading Style Sheets' }
        ],
        geografie: [
            { question: 'Was ist die Hauptstadt von Frankreich?', answer: 'Paris' },
            { question: 'Welcher Fluss fließt durch Ägypten?', answer: 'Nil' },
            { question: 'Welches ist das größte Land der Welt nach Fläche?', answer: 'Russland' },
            { question: 'In welchem Land liegen die Pyramiden von Gizeh?', answer: 'Ägypten' },
            { question: 'Welcher Kontinent hat die größte Bevölkerungszahl?', answer: 'Asien' },
            { question: 'Welches Meer liegt zwischen Europa und Afrika?', answer: 'Mittelmeer' },
            { question: 'Wie viele Bundesländer hat Deutschland?', answer: '16' },
            { question: 'Welcher Berg ist der höchste der Welt?', answer: 'Mount Everest' },
            { question: 'Welcher Ozean liegt an der Ostküste der USA?', answer: 'Atlantischer Ozean' },
            { question: 'Welches Land hat die meisten Inseln der Welt?', answer: 'Schweden' }
        ],
        geschichte: [
            { question: 'Wer war der erste Präsident der USA?', answer: 'George Washington' },
            { question: 'In welchem Jahr begann der Zweite Weltkrieg?', answer: '1939' },
            { question: 'Wer baute die berühmten Pyramiden von Gizeh?', answer: 'Ägypter' },
            { question: 'Welches Imperium regierte in Rom?', answer: 'Römisches Imperium' },
            { question: 'Wer war der Anführer der Nationalsozialisten in Deutschland?', answer: 'Adolf Hitler' },
            { question: 'In welchem Jahr fiel die Berliner Mauer?', answer: '1989' },
            { question: 'Welches Land entdeckte Christoph Kolumbus 1492?', answer: 'Amerika' },
            { question: 'Wer war die erste Frau auf dem britischen Thron?', answer: 'Königin Maria I.' },
            { question: 'Welcher Vertrag beendete den Ersten Weltkrieg?', answer: 'Vertrag von Versailles' },
            { question: 'In welchem Jahr wurde die Unabhängigkeitserklärung der USA unterzeichnet?', answer: '1776' }
        ],
        biologie: [
            { question: 'Was ist die kleinste Einheit des Lebens?', answer: 'Zelle' },
            { question: 'Welches Molekül transportiert Sauerstoff im Blut?', answer: 'Hämoglobin' },
            { question: 'Wie nennt man die Umwandlung von Raupe zu Schmetterling?', answer: 'Metamorphose' },
            { question: 'Welches Organ ist für die Filtration von Blut zuständig?', answer: 'Niere' },
            { question: 'Welches Gas atmen Pflanzen bei der Photosynthese ein?', answer: 'Kohlendioxid' },
            { question: 'Wie viele Chromosomen hat ein menschlicher Körper normalerweise?', answer: '46' },
            { question: 'Was ist der wissenschaftliche Name für den Menschen?', answer: 'Homo sapiens' },
            { question: 'Welches Vitamin wird vom Körper produziert, wenn man Sonnenlicht ausgesetzt ist?', answer: 'Vitamin D' },
            { question: 'Wie nennt man Tiere, die sowohl Pflanzen als auch Fleisch fressen?', answer: 'Allesfresser' },
            { question: 'Welches Organ ist das größte im menschlichen Körper?', answer: 'Haut' }
        ],
        film: [
            { question: 'Wer führte Regie bei dem Film "Titanic"?', answer: 'James Cameron' },
            { question: 'Welche Serie handelt von sieben Königslanden und einem eisernen Thron?', answer: 'Game of Thrones' },
            { question: 'Wer spielt die Rolle des Iron Man im Marvel Cinematic Universe?', answer: 'Robert Downey Jr.' },
            { question: 'Welcher Film gewann 2020 den Oscar für den besten Film?', answer: 'Parasite' },
            { question: 'Wie heißt die Hauptfigur in der Serie "Breaking Bad"?', answer: 'Walter White' },
            { question: 'Welche Filmreihe handelt von einem Zauberer namens Harry?', answer: 'Harry Potter' },
            { question: 'In welchem Film sagt die Figur Forrest Gump: "Das Leben ist wie eine Schachtel Pralinen"?', answer: 'Forrest Gump' },
            { question: 'Wie heißt der Regisseur der "The Dark Knight"-Trilogie?', answer: 'Christopher Nolan' },
            { question: 'Welche Serie spielt in der fiktiven Stadt Hawkins?', answer: 'Stranger Things' },
            { question: 'In welchem Film spielt Leonardo DiCaprio einen Börsenmakler namens Jordan Belfort?', answer: 'The Wolf of Wall Street' }
        ],
        musik: [
            { question: 'Wer komponierte die "Mondscheinsonate"?', answer: 'Ludwig van Beethoven' },
            { question: 'Welche Band veröffentlichte das Album "Abbey Road"?', answer: 'The Beatles' },
            { question: 'Wie heißt die berühmte Oper von Giuseppe Verdi, die die Geschichte von Aida erzählt?', answer: 'Aida' },
            { question: 'Welches Instrument ist bekannt als "Königin der Instrumente"?', answer: 'Orgel' },
            { question: 'Wer ist bekannt für den Song "Billie Jean"?', answer: 'Michael Jackson' },
            { question: 'Wie nennt man die italienische Bezeichnung für eine schnelle, lebhafte Musikrichtung?', answer: 'Allegro' },
            { question: 'Welche Musikrichtung entstand in den 1950er Jahren und ist bekannt für seinen Rhythmus und seine Improvisation?', answer: 'Jazz' },
            { question: 'Welches Instrument hat 88 Tasten?', answer: 'Klavier' },
            { question: 'Wie heißt die berühmte Pop-Sängerin, die 2023 den Song "Anti-Hero" veröffentlichte?', answer: 'Taylor Swift' },
            { question: 'Welches Genre ist für seinen Einsatz von E-Gitarren und Verzerrern bekannt?', answer: 'Rock' }
        ],
        sport: [
            { question: 'Welches Land hat die meisten Fußball-Weltmeisterschaften gewonnen?', answer: 'Brasilien' },
            { question: 'Wie viele Spieler sind in einem regulären Basketballteam auf dem Feld?', answer: '5' },
            { question: 'In welchem Sport wird der Begriff "Hole-in-One" verwendet?', answer: 'Golf' },
            { question: 'Wer hält den Weltrekord für die meisten Goldmedaillen bei den Olympischen Spielen?', answer: 'Michael Phelps' },
            { question: 'Welche Sportart ist bekannt für die Disziplinen 100 Meter, 200 Meter und 400 Meter?', answer: 'Leichtathletik' },
            { question: 'Wie viele Minuten dauert ein reguläres Fußballspiel (ohne Verlängerung)?', answer: '90' },
            { question: 'Welcher Sport wird auf einem Rasenplatz mit einem Schläger und einem kleinen weißen Ball gespielt?', answer: 'Tennis' },
            { question: 'Wie nennt man das Turnier, das jährlich im Tennis als "Grand Slam" bekannt ist und in Wimbledon stattfindet?', answer: 'Wimbledon' },
            { question: 'Welche Sportart wird als "König der Sportarten" bezeichnet?', answer: 'Fußball' },
            { question: 'Welcher Sport hat die Disziplinen Slalom und Abfahrt?', answer: 'Ski Alpin' }
        ], philo: [
            { question: 'Wer ist der Autor des Werkes "Die Republik"?', answer: 'Platon' },
            { question: 'Welche Philosophie vertritt der Gedanke, dass nur das Wissen der Sinne als sicher gilt?', answer: 'Empirismus' },
            { question: 'Wie heißt der philosophische Ansatz, der das Prinzip des größten Glücks für die größte Zahl vertritt?', answer: 'Utilitarismus' },
            { question: 'Welcher französische Philosoph schrieb das Werk "Das Kapital"?', answer: 'Karl Marx' },
            { question: 'Wer formulierte den kategorischen Imperativ?', answer: 'Immanuel Kant' },
            { question: 'Welche philosophische Richtung beschäftigt sich mit der Natur der Realität und der Erkenntnis?', answer: 'Metaphysik' },
            { question: 'Wer ist bekannt für die Philosophie des "Skeptizismus"?', answer: 'Pyrrhon von Elis' },
            { question: 'Welches Werk von René Descartes beginnt mit dem Satz "Cogito, ergo sum"?', answer: 'Meditationen über die Erste Philosophie' },
            { question: 'Wie nennt man die Philosophie, die die menschliche Existenz und Freiheit in den Mittelpunkt stellt?', answer: 'Existentialismus' },
            { question: 'Wer schrieb "Die Ethik" und entwickelte die Idee der "Substanzmetaphysik"?', answer: 'Baruch de Spinoza' }
        ],

        wirtschaft: [
            { question: 'Was bezeichnet man als das "Bruttoinlandsprodukt" (BIP)?', answer: 'Den Gesamtwert aller in einem Land produzierten Waren und Dienstleistungen' },
            { question: 'Welche Theorie beschreibt den Zusammenhang zwischen Angebot und Nachfrage?', answer: 'Gesetz von Angebot und Nachfrage' },
            { question: 'Wer ist bekannt für die "unsichtbare Hand" in der Wirtschaft?', answer: 'Adam Smith' },
            { question: 'Wie nennt man die Gesamtheit aller Märkte, die im internationalen Handel tätig sind?', answer: 'Globaler Markt' },
            { question: 'Was versteht man unter Inflation?', answer: 'Eine allgemeine Erhöhung des Preisniveaus von Waren und Dienstleistungen' },
            { question: 'Was ist ein Aktienkurs?', answer: 'Der Preis einer Aktie auf dem Aktienmarkt' },
            { question: 'Welches wirtschaftliche Konzept beschreibt den Vorteil, den ein Unternehmen durch Spezialisierung erzielt?', answer: 'Komparativer Vorteil' },
            { question: 'Wie nennt man die wirtschaftliche Situation, in der die Nachfrage das Angebot übersteigt?', answer: 'Überhitzung' },
            { question: 'Was ist eine Rezession?', answer: 'Ein wirtschaftlicher Rückgang über einen längeren Zeitraum' },
            { question: 'Wie nennt man die Strategie, bei der Unternehmen versuchen, ihre Produktionskosten durch Massenproduktion zu senken?', answer: 'Skaleneffekte' }
        ]
    };

    if (questions[theme]) {
        let currentQuestionIndex = 0;
        let score = 0;
        const totalQuestions = questions[theme].length;

        // Funktion zum Anzeigen der nächsten Frage
        function showQuestion(index) {
            const currentQuestion = questions[theme][index];
            questionText.textContent = `${index + 1}. ${currentQuestion.question}`;
            answerInput.value = ''; // Vorherige Antwort löschen
        }

        // Zeige die erste Frage initial
        showQuestion(currentQuestionIndex);

        // Ereignisbehandlung für den "Nächste Frage" Button
        nextQuestionBtn.addEventListener('click', () => {
            const userAnswer = answerInput.value.trim().toLowerCase();
            const correctAnswer = questions[theme][currentQuestionIndex].answer.toLowerCase();

            // Überprüfen, ob die Antwort korrekt ist
            if (userAnswer === correctAnswer) {
                score++;
            }

            // Zum nächsten Frage oder Ergebnis anzeigen
            currentQuestionIndex++;

            if (currentQuestionIndex < totalQuestions) {
                showQuestion(currentQuestionIndex);
            } else {
                // Ergebnis nach allen Fragen anzeigen
                questionsContainer.style.display = 'none';
                resultContainer.style.display = 'block';
                resultDisplay.textContent = `Du hast ${score} von ${totalQuestions} Punkten erreicht.`;

                // Möglichkeit zur Wiederholung des Quiz
                retryBtn.addEventListener('click', () => {
                    window.location.reload();
                });

                // Möglichkeit zur Rückkehr zur Startseite
                homeBtn.addEventListener('click', () => {
                    window.location.href = 'index.html';
                });
            }
        });
    } else {
        questionsContainer.textContent = 'Für dieses Thema sind keine Fragen verfügbar.';
    }
} else {
    questionsContainer.textContent = 'Kein Thema ausgewählt.';
}
