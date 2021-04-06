
# JavaScript Quiz Show Game

## Objective
This Website was created for the purpose of satisfying the criteria for the second Milestone Project as part of Code Institute's Full Stack Developer course.
The project was constructed with knowledge obtained from the previous Milestone project, namely in HTML and CSS but also with knowledge gained in the JavaScript Fundamentals and Interactive Frontend Development modules.

## Table of Contents

*
*
*
*

## UX & Design

### Strategy Plane

The Quiz Website was created to highlight my combined knowledge of HTML, CSS and JAvaScript while also providing the websites users with an engaging and challenging multiple choice game. The questions themselves will be generated and retrieved from the Open Triva Database which allows the use of a free JSON API for use in programming projects.
The game should be intuitive and easy to interact with, while also providing some feedback to the user when the game is finished.

Goals:

* Present the knowledge acquired in HTML, CSS and JavaScript.
* Give website users an interactive game experience.
* Create a website that will make the user want to stay on the website to beat their personal best score. 

#### User Stories

* As a user, I want to:
    * Understand the purpose of the site on landing.
    * Be able to use the website clearly in the browser.
    * Have a form of game instructions.
    * Have a form of in-game feedback on correct/incorrect answers.
    * Be able to restart the game when the current one has ended.
    * Get a score total for the number of correct answers selected of the total pool of qiestions asked.

### Skeleton Plane 

#### Wireframes

Potential landing page look

<img src="assets/images/Landing page.png">

Potential start button/game initializer 

<img src="assets/images/Initialize game .png">

Simple question screen layout

<img src="assets/images/question screen.png">

Quiz result with score and message conditional on result

<img src="assets/images/quiz reult.png">

### Surface Plane 

#### Colour Scheme
Body: Blue #007bff
Text: Blue #007bff, White #fff, Black #000000
Answer options: Green if answered correctly. Red if answered incorrectly & correct answer highlighted in Green.

#### Imagery
Body: Background: Image of retro television used to give the impression of a live TV game show.

#### Iconography 
Answer options: tick and X icons used when right/wrong answers are selected. Trophy icon and face emoji displayed on result page (changes with result). 

#### Typography
font-family: 'Karla', sans-serif; imported from Google Fonts used throughout.

### Structure Plane

User Story:

***"Understand the purpose of the site on landing."***

Acceptance criteria:
* Description informing the user about the quiz.
* Proceed by clicking the 'start' button.

Defined:
The landing papge will display a TV image as the background. A description box mentioneing the live date and prompting the user to participate in the quiz. A start button will prompt the user to carry on to the next stage of the game.


User Story:

***"Be able to use the website clearly in the browser."***

Acceptance criteria:
* Website is readable and rendered clearly for all website content.

Defined:
The quiz website works best in browser view on devices from iPad and larger. Bootstrap flexbox has been used for the containers' columns and rows for consistent layout.  


User Story:

***"Have a form of game instructions."***

Acceptance criteria:
* Have a set of game rules.

Defined:
Once the user clicks the 'start' button they are presented with a set of game rules detailing how many seconds they have to answer a question, how they can only pick one answer, how unanswered questions will be counted as incorrect, how they must finish the quiz once they start, and points are awareded for correct answers only.


User Story:

***"Have a form of in-game feedback on correct/incorrect answers."***

Acceptance criteria:
* User to get instant feedback on their chosen answer

Defined:
Once a question is displayed, one of three things can happen. 1)The user selects the correct answer and the correct answer is highlighted with a green tick mark and background. 
2) The user selects the wrong answer and the wrong answer is highlighted with a red X mark and background and the correct answer is highlighted with a green tick mark and background. 3) The user does not select any answer within 15 seconds and the correct andswer is highlighted with a green tick mark and background, no selection is counted as an incorrect answer.


User Story:

***"Be able to restart the game when the current one has ended."***

Acceptance criteria:
* User can restart game without refreshing the browser window. 

Defined:
A 'try again' button will be added to the results page to allow the user to start a fresh game. To keep the user engaged they can only use this option when they have completed one whole game.  


User Story:

***"Get a score total for the number of correct answers selected of the total pool of questions asked."***

Acceptance criteria:
* User score is displayed on the screen

Defined:
A results section will render the users score out of the total number of questions asked, an accompanying emoji and message will inform the user of their result.
A 'try again' and 'quit' button will reset the score and allow the user to have another try or leave the game. 



### Scope Plane


Features:
   1. A welcome message containing live date/year and 'start' button. 
   2. A rules section with 'exit' and 'continue' buttons.
   3. The main game section with rendered question and answer options.
   4. Timer countdown.
   5. Question counter.
   6. Next button.
   7. A result section displaying the users score and message with 'try again' and 'quit' buttons.

![features](https://user-images.githubusercontent.com/34096825/113609722-13db1700-9644-11eb-8da4-c831303e0960.png)

API integration using fetch:
Another feature of the 'backend' of the project is the integration of the [Open Trivia Database](https://opentdb.com/api_config.php) API which provides the questions and answers for the quiz. 
To make the quiz a challenge, I have selected to use multiple choice questions of various difficulty. 
As the questions and answers all came indexed in the same order it was necessary to prepare a custom shuffle function to randomise these when rendered to the DOM for the users selection.
This feature was a 10 for importance and a 10 for difficulty. 



### Features left to implement
* User selection of game mode difficulty and quantity of questions.
* User name input and leaderboard rankings.
* 2 player mode or 1 v computer.



### Technologies used

* Balsamiq 
   * Used to create the wireframes for UX design.

* HTML
   * HTML language used to complete the structure of the website.

* CSS
   *  CSS to style the website.

* JavaScript
   * JavaScript primarily for functionality and behaviour throughout the website, event listeners and retrieving the API used for the quizzes questions.  

* Excel
   * Used to create the bar graph detailing the difficulty/importance matrix for the Scope plane.

* Google Fonts
   * library of more than a thousand free and open source font families. font-family: 'Karla', sans-serif used throughout this project.

* Bootstrap
   * The CSS framework directed at responsive, front-end web development.

* Visual Studio Code
   * VSCode is a source-code editor made by Microsoft. I used VS Code and the live server extension to code and develop this project before transferring the code base to Gitpod for. 

* GitHub
   * Is the repository I used to store and modify my code and also where my live website is hosted.

* Git 
   * Is the version control software used to add, commit and push code to the GitHub repository.

* FontAwesome
   * Font Awesome is a font and icon toolkit based on CSS, I added it's CDN to allow the use of icons in the project.

* Google Developer Tools
   * Used to inspect page elements and help debug issues with the website in real time.


### Testing

Testing of HTML, CSS and JS was done with the below validators:

* [HTML](https://validator.w3.org/)
* [CSS](https://jigsaw.w3.org/css-validator/)
* [JavaScript](https://jshint.com/)


### Deployment

#### Project inception

I created the project folders and file structure in the Visual Studio Code filesystem. I also created a repository in Github to store my code base.
I coded the majority of the project using VS Code's and the 'live server' extension as I find it more user friendly than GitPod. 
After finishing the project in VS Code, I transferred the code to GitPod where I then published each code snippet to GitHub using the following protocol:

 * git add 'filename' = add files to the staging area.
 * git commit 'filename' -m'message' = commit the changes to the local repository
 * git push = pushes all commits to GitHub's repository
