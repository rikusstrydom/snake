"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeGame = void 0;
const helpers_1 = require("./helpers");
const snake_1 = require("./snake");
class SnakeGame {
    constructor(width, height, gridSize, context) {
        this.gamePaused = true;
        this.gameSpeed = 100;
        this.gameWidth = width;
        this.gameHeight = height;
        this.gridSize = gridSize;
        this.snake = new snake_1.Snake(this.gridSize);
        this.context = context;
    }
    newGame() {
        this.spawnFood();
        setInterval(() => {
            if (!this.gamePaused) {
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
        this.foodLocation = (0, helpers_1.randomLocation)(this.gridSize, this.gameWidth, this.gameHeight);
        console.log('foodLocation', this.foodLocation);
        // while (snakeMap.has(`${this.foodLocation.x}:${this.foodLocation.y}`)) {
        //   this.foodLocation = randomLocation(this.gridSize, this.gameWidth, this.gameHeight);
        //     console.log('relocate food', this.foodLocation);
        // }
        (0, helpers_1.drawImage)(this.context, 'food', this.foodLocation, this.gridSize);
    }
}
exports.SnakeGame = SnakeGame;
