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

//declaring variables
let quizQuestion = new Array(questions);//assigning the global questions array to a new quizQuestion array.
let timeValue =  15;//default 15 seconds. 
let question_count = 0;
let question_index = 0;
let question_number = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


// getting quizQuestion and options from array
function displayQuestions(index){
    const question_text = document.querySelector(".question_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let displayQuestion = '<span>'+ quizQuestion[question_index][index].question +'</span>';
    let displayAnswers = '<div class="option"><span>'+ quizQuestion[question_index][index].possible_answers[0] +'</span></div>'
    + '<div class="option"><span>'+ quizQuestion[question_index][index].possible_answers[1] +'</span></div>'
    + '<div class="option"><span>'+ quizQuestion[question_index][index].possible_answers[2] +'</span></div>'
    + '<div class="option"><span>'+ quizQuestion[question_index][index].possible_answers[3] +'</span></div>';
    question_text.innerHTML = displayQuestion; //adding new questions to question text
    optionList.innerHTML = displayAnswers; //adding new answers to options text

    const question_option = optionList.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < question_option.length; i++){
        question_option[i].setAttribute("onclick", "answerSelection(this)");
    }
}

// creating the divs for icons
let correctIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let wrongIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function answerSelection(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userSelection = answer.textContent; //getting user selected option
    let correctAnswer = quizQuestion[question_index][question_count].correct_answer; //getting correct answer from array
    const questionOptions = optionList.children.length; //getting all option items

    if(userSelection == correctAnswer){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green colour to correct selection
        answer.insertAdjacentHTML("beforeend", correctIcon); //adding tick icon to correct selected option
    }
}
