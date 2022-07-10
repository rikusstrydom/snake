
import { drawImage, randomLocation, removeImage } from "./helpers";
import { Snake } from "./snake";
import { location } from "./types";

export class SnakeGame {
  gamePaused: boolean = true;
  gameSpeed: number = 100;
  gameWidth: number;
  gameHeight: number;
  gridSize: number;
  
  snake: Snake;

  foodLocation!: location;
  context: CanvasRenderingContext2D;
  constructor(width: number, height: number, gridSize: number, context: CanvasRenderingContext2D) {
    this.gameWidth = width;
    this.gameHeight = height;
    this.gridSize = gridSize;
    this.snake = new Snake(this.gridSize);
    this.context = context;
  }
  
  newGame() {
    this.spawnFood();
    setInterval(() => {
      if(!this.gamePaused) {
          // moveSnake();
      }  
  }, this.gameSpeed);
    this.gamePaused = false;
  }

  playGame() {
    this.gamePaused = false;
  }
  
  pauseGame() {
    this.gamePaused = true;
  }

  spawnFood() {
    this.foodLocation = randomLocation(this.gridSize, this.gameWidth, this.gameHeight);
    console.log('foodLocation', this.foodLocation);
    // while (snakeMap.has(`${this.foodLocation.x}:${this.foodLocation.y}`)) {
    //   this.foodLocation = randomLocation(this.gridSize, this.gameWidth, this.gameHeight);
    //     console.log('relocate food', this.foodLocation);
    // }
    // drawImage(this.context, 'food', this.foodLocation, this.gridSize);
    var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    var img = document.getElementById("vagina") as HTMLImageElement;
    img.onload = () => {
      ctx.drawImage(img, this.foodLocation.x, this.foodLocation.y, 50, 50);
    }
    

  }
}