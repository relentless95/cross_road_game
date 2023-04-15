# Cross Road Game

[Cross Road game](https://relentless95.github.io/cross_road_game/)

## Description
Cross Road game is a game where the player controls the character (blue). The objective of the game is to help blue cross the road to unite with his family. The player has to avoid getting hit by obstacles(cars) in order to win. The game has 5 levels and the difficulty increases each level. The player wins the game by completing all 5 levels of the game.


## MVP

- The cars must be able to move vertically in random up and down directions across the canvas and appear on the opposite side of the canvas. 
- The character (blue) must be able to move to the right horizontally and appear on the left side of the canvas. 
- Collision between the character and the obstacles ends the game and the player can restart the game. 
- When the player wins the congratulations screen should appear and the player can restart the game.


## Backlog
- Add a maximum number of attempts (lives) before losing the game.
- Making the obstacles move faster
- Add audio


## Data structure

### index.js
- myGameArea{}
- start(){}
- clear(){}
- stop(){}
- reset(){}
- updateGameArea(){}
- checkGameOver(){}
  
### player.js
- player{}
- update(){}
- newPos(){}
- left(){}
- right(){}
- top(){}
- botton(){}
- crashWith(){}
- move(){}
  
### Obstacle.js
- draw(){}
- move(){}
- left(){}
- right(){}
- top(){}
- bottom(){}
  
### utilis.js
rand(){}
randIndex(){}

## States y States Transitions

- startScreen
- GameAreaScreen
- GameOverScreen
- WinScreen



## Task
- index-write html, id tags, import game fonts
- style-write styles and display flexbox
- player-write the class constructor
- index-create the game are and render the player on the canvas
- obstacle-create obstacle class
- utils-add random function for the obstcle positons
- utils-add random function for the obstacles to be used in index.js
- index-render the obstacles on the game
- player-add collion functions left(), right() etc..
- index-start game button and screen
- obstacles-add collision function
- index-add collisions i.e game over
- index-when there is no collision and the level increases, increase the display objects
- index-winscreen
- index-losescreen
- index-restart



## Links


- [Slides Link](https://docs.google.com/presentation/d/1fcdscYixWB2mqOyZGLRiXffZSbEd2gx8VVIpbriMq1I/edit#slide=id.g10c9bbfca61_0_31)
- [Github repository Link](https://github.com/relentless95/cross_road_game)
- [Deployment Link](https://relentless95.github.io/cross_road_game/)
