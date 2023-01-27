
let myObstacles=[]

const myGameArea = {
    canvas: document.querySelector("#canvas"),
    frames: 0, // don't know yet what its used for
    start: function() {
        this.canvas.width=480;
        this.canvas.height=270;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval)
    }
}

const player = new Player(10, 10, "#50BEFA", 20, 110);
myGameArea.start()

for(let i = 0;i< 10; i++){
    myObstacles.push(new Obstacle(randIndex(['up', 'down'])) )
}



function updateGameArea(){
    myGameArea.clear(); //clear the canvas
    // update the player's position before drawing
    player.newPos();
    player.update();
    for(let obstacle of myObstacles){
        obstacle.move();
        obstacle.draw(false);
    
    }

    


}
