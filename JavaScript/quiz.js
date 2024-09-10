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
        // Weitere Themen und Fragen nach Bedarf hinzufügen
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
