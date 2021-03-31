//assign the api URL to the url variable. provides 10 multiple choice, multiple difficulty questions per call.
const url = "https://opentdb.com/api.php?amount=10&type=multiple";

//Fetch API allows web browser to make HTTP requests
//returns a response result for date of an array of questions.
fetch(`${url}`)
  .then((response) => response.json())
  .then((data) => {
    quizAPI(data);//pass retreived data to the quizAPi function
})