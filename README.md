# [Memory Game Project](https://curious-yu.github.io/fend-project-memory-game/)

## About the project

This is the project 2 of the Udacity/Google-FEND program. The purpose of this project is to practice using the new JS skills from the program by creating a responsive memory game.

## Author

Udacity - initial work - [fend-project-memory-game](https://github.com/udacity/fend-project-memory-game)

Wen Yu - completing the game - [fend-project-memory-game](https://curious-yu.github.io/fend-project-memory-game/)

## Game instructions

  1. Open the [Game](https://wycodebook.github.io/fend-project-memory-game/).
  2. Start the game by clicking on cards.
  3. Cards will turn over so you can see the icons.
  4. Your goal is to match two cards of the same type at a time. The two opening cards will close if they don't match.
  5. Then try to match all pairs in as minimum moves as possible.
  6. You will get to see how well you done detailed in Game Stats!!!

## About the game

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. I will need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

[Walk-through instructions](https://matthewcranford.com/category/blog-posts/walkthrough/memory-game/) are also provide to help succeeding the project.

## How the Game Works

  1. The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
  2. When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.
  3. A restart button allows the player to reset the game board, the timer, and the star rating.
  4. The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).
  5. When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.
  6. A Game Stats will appear when all cards matched.

More details on the [Memory Game project rubric](https://review.udacity.com/#!/rubrics/591/view)

## Built With

[JavaScript Shuffle Array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976)

[setTimeout()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

[setInterval()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

[clearInterval()](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

[querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)

[arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

[location.reload](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)

## How to clone the game

  1. On GitHub, navigate to the main page of the repository.
  2. Under the repository name, click Clone or download.
  3. In the Clone with HTTPs section, click  to copy the clone URL for the repository.
  4. Open Git Bash.
  5. Change the current working directory to the location where you want the cloned directory to be made.
  6. Type git clone, and then paste the URL you copied in Step 2.
  7. Press Enter. Your local clone will be created.

## How to clone the game to GitHub DeskTop

  1. On GitHub, navigate to the main page of the repository.
  2. Under your repository name, click  to clone your repository in Desktop. Follow the prompts in GitHub Desktop to complete the clone.

## How to contribute

The files in this repository are created for the FEND course. Since this project will be reviewed and graded in order to complete the course; therefore, pull requests will not be merged into the project. Please clone the project if you want to share the fun!
