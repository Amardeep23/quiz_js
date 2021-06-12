const quizDB = [
    {
        question: "Q1: Agents of fog formation do not include ________",
        a: "High relative humidity",
        b: "Diurnal temperatures of short ranges",
        c: "Winter season",
        d: "Rapid radiation",
        ans: "ans2"
    },

    {
        question: "Q2: Which one among the following forces is most powerful in determining movement of wind including its velocity ?",
        a: "Gravitational force",
        b: "Centrifugal force",
        c: "Frictional force",
        d: "Pressure gradient force",
        ans: "ans4"
    },

    {
        question: "Q3: Atmospheric humidity is measured by ________",
        a: "Psychrometer",
        b: "Anemometer",
        c: "Lysimeter",
        d: "Hydrometer",
        ans: "ans1"
    },

    {
        question: "Q4: Which is the warmest layer of the atmosphere?",
        a: "Thermosphere",
        b: "Troposphere",
        c: "Stratosphere",
        d: "Mesosphere",
        ans: "ans1"
    },

    {
        question: "Q5: Which of the following statements is not true of Trade Winds?",
        a: "They blow from the Horse Latitudes to the Doldrums",
        b: "They are deflected to the right to become South-East Trades in the southern hemisphere",
        c: "They are constant in strength and direction",
        d: "They sometimes contain intense depressions",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    question.innerText = quizDB[questionCount].question;
    option1.innerText = quizDB[questionCount].a;
    option2.innerText = quizDB[questionCount].b;
    option3.innerText = quizDB[questionCount].c;
    option4.innerText = quizDB[questionCount].d;
};

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
         answer = curAnsElem.id;
     }  
    });
    return answer;
};

const deselectALL = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectALL();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{ 
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length}</h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    };
});