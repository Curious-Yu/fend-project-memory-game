/* global setting */

const deck = document.querySelector('.deck');
 console.log(deck);


// Shuffle function from http://stackoverflow.com/a/2450976

function shuffleDeck(){
  const cardsToShuffle = Array.from( document.querySelectorAll('.deck li'));
  const shuffledCards = shuffle(cardsToShuffle);
  for (card of shuffledCards) {
    deck.appendChild(card);
  }
};

shuffleDeck();

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/* global settings */

let toggledCards = [];
let matched = 0;
let moves = 0;




/* the event listener for the game */

deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (clickTarget.classList.contains('card') && !clickTarget.classList.contains('match') && toggledCards.length < 2 && !toggledCards.includes(clickTarget)) {
    toggleCard(clickTarget);
    addToggleCard(clickTarget);
    if (toggledCards.length === 2) {
      checkMatch();
      addMove();
      hideStar();
      if (matched === 8){
        stopTime();
        toggleModal();
        gameStats();
      }
    }
  }
});

/* codes for clicking and card matching */

function toggleCard(clickTarget) {
  clickTarget.classList.toggle('open');
  clickTarget.classList.toggle('show');
};

function addToggleCard(clickTarget) {
  toggledCards.push(clickTarget);
  console.log(toggledCards);
};

function checkMatch() {
  if (toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className) {
    matchCard ();
    matched++;
    console.log(matched);
  }
  else {
    notMatchCard();
  }
};

function matchCard (){
  toggledCards[0].classList.add('match');
  toggledCards[1].classList.add('match');
  toggledCards = [];
};

function notMatchCard (){
  setTimeout(() => {
    toggledCards[0].classList.remove('open');
    toggledCards[0].classList.remove('show');
    toggledCards[1].classList.remove('open');
    toggledCards[1].classList.remove('show');
    toggledCards = [];}, 500);
};

/* codes for the move counter */

function addMove(){
  const theMove = document.querySelector('.moves');
  moves += 1;
  theMove.innerHTML = "Move(s):" + moves;
  if (moves === 1){
    startTime();
  }
};

/* codes for the star rating */

function hideStar(){
  if (moves >= 16){
    document.getElementById('star1').style.display = "none";
  } else if (moves >= 32){
    document.getElementById('star2').style.display = "none";
  }
};

/* global settings */

let second = 0;
let minute = 0;
let time = 0;
let interval = setInterval(startTime, 1000);
const theClock = document.querySelector('.clock');

/* codes for the timer */

function startTime(){
  if (moves >= 1){
    time++;
    const second = Math.floor(time % 60);
    const minute = Math.floor(time / 60);
    theClock.innerHTML = "Time: " + minute + ":" + second;
  }
};

function stopTime(){
  clearInterval(interval);
};

/* codes for the restart */

function restartGame(){
  location.reload();
};

document.querySelector('.restart').addEventListener('click', restartGame);


/* codes for the pop-up message */



function toggleModal(){
  const modal = document.querySelector('.modal_background');
  modal.classList.toggle('hide');
};

function gameStats(){
  const stars = getStars();
  document.querySelector('.modal_time').innerHTML = theClock.innerHTML;
  document.querySelector('.modal_moves').innerHTML = 'Moves: ' + moves;
  document.querySelector('.modal_stars').innerHTML = 'Stars:' + starCount;
  document.querySelector('.modal_message').innerHTML = '🏆 Congratulations!! You are the winner 🏆';
};

function getStars(){
  stars = document.querySelectorAll('.stars li');
  starCount = 0;
  for (stars of stars){
    if (stars.style.display !== "none"){
      starCount++;
    }
  }
  console.log(starCount);
  return starCount;
};


/* codes for buttons */

document.querySelector('.modal_replay').addEventListener('click', restartGame);

document.querySelector('.modal_close').addEventListener('click', toggleModal);

document.querySelector('.modal_cancel').addEventListener('click', toggleModal);
