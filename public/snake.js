"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
const types_1 = require("./types");
class Snake {
    constructor(size) {
        this.body = [];
        this.bodyMap = new Map();
        this.size = size;
        this.direction = types_1.direction.right;
        this.body = [
            { location: { x: 100, y: 400 }, direction: types_1.direction.right },
            { location: { x: 50, y: 400 }, direction: types_1.direction.right },
            { location: { x: 0, y: 400 }, direction: types_1.direction.right },
        ];
    }
    changeDirection() {
    }
    moveSnake() {
        const snakeHead = Object.assign({}, this.snakeHead());
        snakeHead.direction = this.direction;
        // switch (snakeHead.direction) {
        //     case direction.right:
        //       snakeHead.location.x += this.size;
        //         if (snakeHead.location.x > playableWidth) snakeHead.location.x = 0;
        //         break;
        //     case direction.left:
        //         snakeHead.location.x -= this.size;
        //         if (snakeHead.location.x < 0) snakeHead.location.x = playableWidth;
        //         break;
        //     case direction.up:
        //         snakeHead.location.y -= this.size;
        //         if (snakeHead.location.y < 0) snakeHead.location.y = playableHeight;
        //         break;
        //     case direction.down:
        //         snakeHead.location.y += this.size;
        //         if (snakeHead.location.y > playableHeight) snakeHead.location.y = 0;
        //         break;
        // }
        // if (snakeMap.has(`${snakeHead.location.x}:${snakeHead.location.y}`)) {
        //     isPaused = true;
        //     console.log('Dead');
        //     return;
        // }
        this.body.unshift(snakeHead);
        // snakeMap.set(`${snakeHead.location.x}:${snakeHead.location.y}`, snakeHead.location);
    }
    snakeHead() {
        return this.body[0];
    }
    snakeTail() {
        return this.body[this.body.length ? this.body.length - 1 : 0];
    }
}
exports.Snake = Snake;
