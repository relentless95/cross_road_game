class Obstacle {
  constructor(direction) {
    this.width = 10;
    this.height = rand(15, 100);
    this.x = rand(210, 700, 10);
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
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
