//selecting required DOM elements
const welcome = document.querySelector(".welcome");
const startBtn = document.querySelector(".startBtn button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");
const resultBox = document.querySelector(".resultBox");
const optionList = document.querySelector(".optionList");
const timeLine = document.querySelector("header .timeLine");
const timeText = document.querySelector(".timer .timeLeftText");
const timeCount = document.querySelector(".timer .timerSeconds");


// if/when startQuiz button clicked
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); //show info box
    welcome.classList.remove("active");//hide welcome message
}
// if/when exitQuiz button clicked
exitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //hide info box
    welcome.classList.add("active");//add welcome message
}
// if/when continueQuiz button clicked
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //hide info box
    quizBox.classList.add("activeQuiz"); //show quiz box
}
