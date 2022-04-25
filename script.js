const quizdb = [
{
    question: "What is the scientific name of a butterfly?",
    a: "Apis",
    b: "Coleoptera",
    c: "Formicidae",
    d: "Rhopalocera",
    ans: "c"
},
    {
    question: "How hot is the surface of the sun?",
    a: "1,233 K",
    b: "5,778 K",
    c: "12,130 K",
    d: "101,300 K",
    ans: "a"
},
    {
    question: "Who are the actors in The Internship?",
    a: "Ben Stiller, Jonah Hill",
    b: "Courteney Cox, Matt LeBlanc",
    c: "Kaley Cuoco, Jim Parsons",
    d: "Vince Vaughn, Owen Wilson",
    ans:"c"
},
    {
    question: "What is the capital of Spain?", 
    a: "Berlin",
    b: "Buenos Aires",
    c: "Madrid",
    d: "San Juan",
    ans:"b"
},
    {
    question: "What are the school colors of the University of Texas at Austin?",
    a: "Black, Red",
    b: "Blue, Orange",
    c: "White, Burnt Orange",
    d: "White, Old gold, Gold",
    ans: "b"
},
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showAnswer = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quizdb[questionCount];
    question.innerText =  questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
   
}
loadQuestion();

const getCheckAnswer = () =>{
       let answer;
       answers.forEach((curAnsElem) => {
           if(curAnsElem.checked){
               answer = curAnsElem.id;
           }
       });
      return answer
};
submit.addEventListener('click', () =>{
    const checkedAnswer =  getCheckAnswer();
    if(checkedAnswer === quizdb[questionCount].ans){
        score++;
    }

    questionCount++;

    if(questionCount < quizdb.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h1> your score is ${score}/${quizdb.length} </h1>
        <button class="btn" onclick="location.reload()">play again</button>
        `
       showScore.classList.remove('scoreArea');
    }
});