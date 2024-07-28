const urlParams = new URLSearchParams(window.location.search);
const surveyId = urlParams.get('survey');
const questionsContainer = document.getElementById('questions');

const surveys = {
    1: [
        "What is your favorite game genre?",
        "How many hours do you play games weekly?",
        "What platform do you prefer for gaming?",
        "Do you enjoy single-player or multiplayer games?",
        "What is your favorite game of all time?",
        "How often do you purchase new games?",
        "What features do you look for in a game?",
        "What game are you looking forward to the most?",
        "What is your primary motivation for gaming?",
        "How do you stay updated with the latest game news?"
    ],
    2: [
        "What was the first game you ever played?",
        "How has your gaming preference changed over the years?",
        "What game has the best storyline?",
        "What game has the best graphics in your opinion?",
        "Do you prefer console or PC gaming?",
        "How do you feel about microtransactions in games?",
        "What game has the best soundtrack?",
        "What is your favorite game developer?",
        "How important is multiplayer to you?",
        "What is the most challenging game you've played?"
    ],
    3: [
        "What game has the best replay value?",
        "How do you choose which games to buy?",
        "What game had the most disappointing ending?",
        "What game do you think is overrated?",
        "What game do you think is underrated?",
        "How do you feel about early access games?",
        "What game has the best character development?",
        "What game has the best community?",
        "What is your favorite game series?",
        "How do you manage your gaming time?"
    ],
    4: [
        "What do you think about the future of VR in gaming?",
        "How do you feel about the current state of the gaming industry?",
        "What game has the best modding community?",
        "What game had the most emotional impact on you?",
        "What game do you think changed the industry the most?",
        "What is your favorite gaming memory?",
        "How do you feel about gaming as a career?",
        "What game has the best boss fights?",
        "What game has the best AI?",
        "What game would you recommend to a non-gamer?",
        "How do you feel about game streaming services?",
        "What game do you think has the best balance of difficulty?",
        "What game has the best open world?",
        "What is the most innovative game you've played?",
        "What is your all-time favorite gaming moment?"
    ]
};

function renderQuestions(survey) {
    survey.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<p>${question}</p><input type="text" required>`;
        questionsContainer.appendChild(questionElement);
    });
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    setTimeout(() => {
        completeSurvey(surveyId);
        alert('Survey completed! You have earned points.');
        window.location.href = 'index.html';
    }, 420000); // 7 minutes in milliseconds
});

renderQuestions(surveys[surveyId]);
