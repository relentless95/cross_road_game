class Obstacle {
  constructor(direction) {
    this.width = 10;
    this.height = rand(15, 100);
    this.x = rand(40, 800, 10); // creating obstacles from pisiton 30 to 700 that are seperated by 10
    this.y = 0;
    this.speed = rand(0.5, 5);
    this.direction = direction;
    this.level = 0; // initial level
  }

  draw(dead) {
    let ctx = myGameArea.context;
    if (dead) {
      ctx.fillStyle = "#800000";
    } else {
      ctx.fillStyle = "#D98D00";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.direction === "up") {
      this.y -= this.speed;
      if (this.y + this.height < 0) {
        this.y = myGameArea.canvas.height + rand(10, 350); // makes the obstacle  appear at the end of the canvas i.e top of the canvas plus a random distance.
      }
    } else {
      this.y += this.speed;
      if (this.y > myGameArea.canvas.height) {
        this.y = 0 - rand(10, 350);
      }
    }
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}
