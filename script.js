// Game Variables
let cards = document.querySelectorAll(".card");
let cardArray = [...cards];
let flippedCard = false;
let lockCard = false;
let firstCard, secondCard;
let revealedCount = 0;
const audio = new Audio("winningSound.wav");




// Shuffle the cards
function shuffle() {
  cardArray.forEach((card) => {
    let randomIndex = Math.floor(Math.random() * cardArray.length);
    card.style.order = randomIndex;
    card.children[1].style.backgroundImage = `url(${card.getAttribute(
      "data-image"
    )})`;
  });
}
// Flip a card
function flipCard() {
  if (lockCard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!flippedCard) {
    // first card flipped
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

// Check for a match
function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards() : unflipCards();
  if(isMatch){
    revealedCount+=2;
  }
  if(revealedCount === cardArray.length){
    // let userName = document.querySelector("#userName").value;
    // alert(userName + "You Win! Refresh to start again");
    audio.play();
    const winnerScreen = document.getElementById("winner");
    winnerScreen.style.display = "block";
  }
}

// Disable matched cards
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

// Unflip non-matched cards
function unflipCards() {
  lockCard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

// Reset the game board
function resetBoard() {
  [flippedCard, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Start the game
function startGame() {
  shuffle();
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

startGame();











