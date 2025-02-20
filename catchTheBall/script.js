// DOM elements
const head = document.querySelector("#head");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const time = document.querySelector("#time");

// variables
let counter = 0;

const start = () => {
  head.classList.remove("circle");
  if (counter < 5) {
    result.style.color = "darkred";
    result.innerHTML = "You lost. Try again!";
  } else {
    result.style.color = "blue";
    result.innerHTML = "You won. Nice job!";
  }
};

// game difficulties
const easy = () => {
  head.style.animationDuration = "20s";
  head.className = "circle";
  time.innerHTML = 20;
  setTimeout(start, 20000);
  setInterval(countDown, 1000);
};

const medium = () => {
  head.style.animationDuration = "15s";
  head.className = "circle";
  time.innerHTML = 15;
  setTimeout(start, 15000);
  setInterval(countDown, 1000);
};

const hard = () => {
  head.style.animationDuration = "12s";
  head.className = "circle";
  time.innerHTML = 12;
  setTimeout(start, 12000);
  setInterval(countDown, 1000);
};

// a function to keep count score
const count = () => {
  counter++;
  score.innerHTML = counter;
};

// a function to reset the game
const reset = () => {
  location.reload();
};

// a function to count the seconds left in the game
const countDown = () => {
  if (time.innerHTML > 0) {
    time.innerHTML = time.innerHTML - 1;
  }
};