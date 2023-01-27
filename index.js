// DOM manipulation
let startScreen = document.querySelector("#start-screen");
let startButton = document.querySelector("#start-btn");
let body = document.querySelector("body");

let myObstacles = [];
let animation_fps = 60;

const myGameArea = {
  canvas: document.querySelector("#canvas"),
  frames: 0, // don't know yet what its used for
  start: function () {
    this.canvas.width = body.offsetWidth / 2; // used offsetWidth instead of innerWidth.
    this.canvas.height = body.offsetHeight;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 1000 / animation_fps);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

const player = new Player(10, 10, "#50BEFA", 20, 110);
myGameArea.start();

for (let i = 0; i < 10; i++) {
  myObstacles.push(new Obstacle(randIndex(["up", "down"])));
}

function updateGameArea() {
  myGameArea.clear(); //clear the canvas
  // update the player's position before drawing
  player.newPos();
  player.update();
  for (let obstacle of myObstacles) {
    obstacle.move();
    obstacle.draw(false);
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
    myGameArea.stop();
  }
}

// start screen hide and display gamescreen
startButton.addEventListener("click", () => {
  myGameArea.canvas.style.display = "block";
  startScreen.style.display = "none";
});
