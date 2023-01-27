// DOM manipulation
let startScreen = document.querySelector("#start-screen");
let startButton = document.querySelector("#start-btn");
let body = document.querySelector("body");
let restartButton = document.querySelector("#restart-btn");
let gameOverScreen = document.querySelector("#gameover-screen");
let levelIndicator = document.querySelector("#level");
let gameAreaScreen = document.querySelector("#gameArea");
let winScreen = document.querySelector("#win-screen");
let replayButton = document.querySelector("#replay-btn");

let myObstacles = [];
let level = 1;

const player = new Player(10, 10, "#50BEFA", 20, 110);
const myGameArea = {
  canvas: document.querySelector("#canvas"),
  start: function () {
    this.canvas.width = body.offsetWidth / 2; // used offsetWidth instead of innerWidth.
    this.canvas.height = window.innerHeight / 2;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 16.67); //!! 1000/60 updates the canvas every 16.67
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  reset: function () {
    clearInterval(this.interval);
    player.move(20, 110);
    this.start();
  },
};

myGameArea.start();

for (let i = 0; i < 10; i++) {
  myObstacles.push(new Obstacle(randIndex(["up", "down"])));
}

function updateGameArea() {
  levelIndicator.innerHTML = `Level: ${level}`;
  myGameArea.clear(); //clear the canvas
  // update the player's position before drawing
  player.newPos();
  player.update();
  for (let obstacle of myObstacles) {
    obstacle.move();
    obstacle.draw();
  }

  // when transitioning levels
  if (player.left() > myGameArea.canvas.width) {
    level += 1;
    for (let i = 0; i < 3; i++) {
      // increasing the number of obstacles when the level increases
      myObstacles.push(new Obstacle(randIndex(["up", "down"])));
    }
    myGameArea.reset();
    if (level > 5) {
      // when winning
      gameAreaScreen.style.display = "none";
      gameOverScreen.style.display = "none";
      winScreen.style.display = "block";
      level = 1;
    }
  }

  checkGameOver();
}

let friction = 0.68;
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY -= 1 * friction;
      break;
    case 40: // down arrow
      player.speedY += 1 * friction;
      break;
    case 37: // left arrow
      player.speedX -= 1 * friction;
      break;
    case 39: // right arrow
      player.speedX += 1 * friction;
      break;
  }
};

document.onkeyup = function (e) {
  player.speedX = 0;
  player.speedY = 0;
};

// checking game over
function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    gameOverScreen.style.display = "block"; // 'block' is used to show the button
    myGameArea.stop();
  }
}

// start screen hide and display gamescreen
startButton.addEventListener("click", () => {
  gameAreaScreen.style.display = "block";
  startScreen.style.display = "none";
  myGameArea.reset();
});

//restart the game
restartButton.addEventListener("click", () => {
  myGameArea.reset();
  gameOverScreen.style.display = "none";
});

//replay the game
replayButton.addEventListener("click", () => {
  gameAreaScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  winScreen.style.display = "none";
  startScreen.style.display = "block";
  myObstacles = [];
  for (let i = 0; i < 10; i++) {
    myObstacles.push(new Obstacle(randIndex(["up", "down"])));
  }
});
