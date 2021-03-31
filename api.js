//assign the api URL to the url variable. provides 10 multiple choice, multiple difficulty questions per call.
const url = "https://opentdb.com/api.php?amount=10&type=multiple";

//globally declare the shuffled questions array so they can be accessed and used in the main.js file. 
let questions = []

//Fetch API allows web browser to make HTTP requests
//returns a response result for date of an array of questions.
fetch(`${url}`)
  .then((response) => response.json())
  .then((data) => {
    quizAPI(data);//pass retreived data to the quizAPi function
})

async function quizAPI(data) {
    tempArray = [];//create a temporary array
    await data.results.map((item) => { //await makes the function wait for a promise.
    const { correct_answer, incorrect_answers } = item;
    tempArray = [correct_answer, ...incorrect_answers];//pass correct ans and copy of incorrect ans to the temp array
    item.possible_answers = [...tempArray];//copy the temp array to the possible answers of item 
    questions.push(item); //push item to the global questions variable    
  });
//pass the questions to the shuffle function
  //shuffleQuestions(questions); 
   
}