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
  shuffleQuestions(questions); 
   
}
//we construct the below function to shuffle the elements of the array so that the possible answers are different rather than the
//correct answer being displayed as the first index as provided by the api
function shuffleQuestions(answers) {
    for (const [index, item] of answers.entries()) {//The entries() method returns an Array Iterator object with key/value pairs.
      const arrayShuffle = [...item.possible_answers];
      item.possible_answers = [arrayShuffle.sort(() => Math.random() - .5)]//sort func on possible answers
      answers[index].possible_answers = [...arrayShuffle.sort(() => Math.random() - .5)]//sort func on index possible answers
    }   
}