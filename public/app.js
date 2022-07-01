/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnakeGame = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
const snake_1 = __webpack_require__(/*! ./snake */ "./src/snake.ts");
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
        // drawImage(this.context, 'food', this.foodLocation, this.gridSize);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("vagina");
        img.onload = () => {
            ctx.drawImage(img, this.foodLocation.x, this.foodLocation.y, 50, 50);
        };
    }
}
exports.SnakeGame = SnakeGame;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeImage = exports.drawImage = exports.randomLocation = void 0;
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomLocation(size, width, height) {
    const x = randomInteger(1, width);
    const y = randomInteger(1, height);
    let xRounded = Math.ceil(x / size) * size;
    let yRounded = Math.ceil(y / size) * size;
    return { x: xRounded, y: yRounded };
}
exports.randomLocation = randomLocation;
function drawImage(context, image, location, gridSize) {
    const img = document.getElementById(image);
    console.log(context);
    context.drawImage(img, location.x, location.y, gridSize, gridSize);
}
exports.drawImage = drawImage;
function removeImage(context, location, gridSize) {
    const img = document.getElementById('clear');
    context.drawImage(img, location.x, location.y, gridSize, gridSize);
}
exports.removeImage = removeImage;


/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Snake = void 0;
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
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


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.direction = void 0;
var direction;
(function (direction) {
    direction[direction["right"] = 0] = "right";
    direction[direction["left"] = 1] = "left";
    direction[direction["up"] = 2] = "up";
    direction[direction["down"] = 3] = "down";
})(direction = exports.direction || (exports.direction = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var context = canvas.getContext("2d");
const snakeSize = 50;
const playableWidth = canvasWidth - snakeSize;
const playableHeight = canvasHeight - snakeSize;
var currentDirection = 'right';
var foodLocation;
var snake = [];
let snakeMap = new Map();
var isPaused = false;
const snakeGame = new game_1.SnakeGame(canvasWidth, canvasHeight, snakeSize, context);
snakeGame.newGame();
// function didSnakeEatFood () {
//     if (snake[0].x === foodLocation.x && snake[0].y === foodLocation.y) {
//         var img = document.getElementById("background") as HTMLImageElement;
//         context.drawImage(img, foodLocation.x, foodLocation.y, snakeSize, snakeSize);
//         var img = document.getElementById("penisHeadRight") as HTMLImageElement;
//         context.drawImage(img, foodLocation.x, foodLocation.y, snakeSize, snakeSize);
//         placeFood();
//         return true;
//     }
//     return false;
// }
// function placeFood() {
//     foodLocation = generateRandomLocation();
//     console.log('foodLocation', foodLocation);
//     while (snakeMap.has(`${foodLocation.x}:${foodLocation.y}`)) {
//         foodLocation = generateRandomLocation();
//         console.log('relocate food', foodLocation);
//     }
//     var img = document.getElementById("vagina") as HTMLImageElement;
//     context.drawImage(img, foodLocation.x, foodLocation.y, snakeSize, snakeSize);
// }
// function moveSnake() {
//     const headLocation = {...snake[0]};
//     headLocation.direction = currentDirection;
//     switch (currentDirection) {
//         case 'right':
//             headLocation.x += snakeSize;
//             if (headLocation.x > playableWidth) headLocation.x = 0;
//             break;
//         case 'left':
//             headLocation.x -= snakeSize;
//             if (headLocation.x < 0) headLocation.x = playableWidth;
//             break;
//         case 'up':
//             headLocation.y -= snakeSize;
//             if (headLocation.y < 0) headLocation.y = playableHeight;
//             break;
//         case 'down':
//             headLocation.y += snakeSize;
//             if (headLocation.y > playableHeight) headLocation.y = 0;
//             break;
//     }
//     if (snakeMap.has(`${headLocation.x}:${headLocation.y}`)) {
//         isPaused = true;
//         console.log('Dead');
//         return;
//     }
//     snake.unshift(headLocation);
//     snakeMap.set(`${headLocation.x}:${headLocation.y}`, headLocation);
//     switch (headLocation.direction) {
//         case 'right':
//             var img = document.getElementById("penisHeadRight") as HTMLImageElement;
//             context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
//             break;
//         case 'left':
//             var img = document.getElementById("penisHeadLeft") as HTMLImageElement;
//             context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
//             break;
//         case 'up':
//             var img = document.getElementById("penisHeadUp") as HTMLImageElement;
//             context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
//             break;
//         case 'down':
//             var img = document.getElementById("penisHeadDown") as HTMLImageElement;
//             context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
//             break;
//     }
//     const previousPart = snake[1];
//     if(headLocation.direction === previousPart.direction) {
//         switch (headLocation.direction) {
//             case 'right':
//                 var img = document.getElementById("penisBodyRight") as HTMLImageElement;
//                 context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 break;
//             case 'left':
//                 var img = document.getElementById("penisBodyLeft") as HTMLImageElement;
//                 context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 break;
//             case 'up':
//                 var img = document.getElementById("penisBodyUp") as HTMLImageElement;
//                 context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 break;
//             case 'down':
//                 var img = document.getElementById("penisBodyDown") as HTMLImageElement;
//                 context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 break;
//         }
//     } else {
//         var img = document.getElementById("background") as HTMLImageElement;
//         context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//         switch (headLocation.direction) {
//             case 'right':
//                 if(previousPart.direction === 'up') {
//                     var img = document.getElementById("penisCurveUpRight") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 } else {
//                     var img = document.getElementById("penisCurveDownRight") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 }
//                 break;
//             case 'left':
//                 if(previousPart.direction === 'up') {
//                     var img = document.getElementById("penisCurveUpLeft") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 } else {
//                     var img = document.getElementById("penisCurveDownLeft") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 }
//                 break;
//             case 'up':
//                 if(previousPart.direction === 'right') {
//                     var img = document.getElementById("penisCurveRightUp") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 } else {
//                     var img = document.getElementById("penisCurveLeftUp") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 }
//                 break;
//             case 'down':
//                 if(previousPart.direction === 'right') {
//                     var img = document.getElementById("penisCurveRightDown") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 } else {
//                     var img = document.getElementById("penisCurveLeftDown") as HTMLImageElement;
//                     context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
//                 }
//                 break;
//         }
//     }
//     if (!didSnakeEatFood()) {
//         const removedTail = snake.pop();
//         snakeMap.delete(`${removedTail.x}:${removedTail.y}`);
//         var img = document.getElementById("background") as HTMLImageElement;
//         context.drawImage(img, removedTail.x, removedTail.y, snakeSize, snakeSize);
//     }
//     const beforeTail = snake[snake.length - 2];
//     const snakeTail = snake[snake.length - 1];
//     var img = document.getElementById("background") as HTMLImageElement;
//     context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
//     switch (beforeTail.direction) {
//         case 'right':
//             var img = document.getElementById("penisBallsRight") as HTMLImageElement;
//             context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
//             break;
//         case 'left':
//             var img = document.getElementById("penisBallsLeft") as HTMLImageElement;
//             context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
//             break;
//         case 'up':
//             var img = document.getElementById("penisBallsUp") as HTMLImageElement;
//             context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
//             break;
//         case 'down':
//             var img = document.getElementById("penisBallsDown") as HTMLImageElement;
//             context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
//             break;
//     }
// }
// function setDirection(newDirection: any) {
//     if (currentDirection === newDirection) return;
//     if (currentDirection === 'right' && newDirection === 'left') return;
//     if (currentDirection === 'left' && newDirection === 'right') return;
//     if (currentDirection === 'up' && newDirection === 'down') return;
//     if (currentDirection === 'down' && newDirection === 'up') return;
//     currentDirection = newDirection
// }
// document.onkeydown = keyListener;
// function keyListener(e: any) {
//     e = e || window.event;
//     if (e.keyCode == '38') {
//         setDirection('up');
//     }
//     else if (e.keyCode == '40') {
//         setDirection('down');
//     }
//     else if (e.keyCode == '37') {
//         setDirection('left');
//     }
//     else if (e.keyCode == '39') {
//         setDirection('right');
//     }
//     else if (e.keyCode == '32') {
//       snakeGame.isPaused = !snakeGame.isPaused;
//     }
// }
// function startGame() {
//     // placeFood();
//     snake = [
//         { x: 100, y: 400 },
//         { x: 50, y: 400 },
//         { x: 0, y: 400 },
//     ];
//     snakeMap = new Map(
//         snake.map(object => {
//           return [`${object.x}:${object.y}`, object];
//         }),
//       );
//       var img = document.getElementById("penisHeadRight") as HTMLImageElement;
//       context.drawImage(img, snake[0].x, snake[0].y, snakeSize, snakeSize);
// }
// startGame()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a2UvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9zbmFrZS8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovL3NuYWtlLy4vc3JjL3NuYWtlLnRzIiwid2VicGFjazovL3NuYWtlLy4vc3JjL3R5cGVzLnRzIiwid2VicGFjazovL3NuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU25ha2VHYW1lID0gdm9pZCAwO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbmNvbnN0IHNuYWtlXzEgPSByZXF1aXJlKFwiLi9zbmFrZVwiKTtcbmNsYXNzIFNuYWtlR2FtZSB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgZ3JpZFNpemUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lU3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IGdyaWRTaXplO1xuICAgICAgICB0aGlzLnNuYWtlID0gbmV3IHNuYWtlXzEuU25ha2UodGhpcy5ncmlkU2l6ZSk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIG5ld0dhbWUoKSB7XG4gICAgICAgIHRoaXMuc3Bhd25Gb29kKCk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZVNuYWtlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuZ2FtZVNwZWVkKTtcbiAgICAgICAgdGhpcy5nYW1lUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHBsYXlHYW1lKCkge1xuICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcGF1c2VHYW1lKCkge1xuICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzcGF3bkZvb2QoKSB7XG4gICAgICAgIHRoaXMuZm9vZExvY2F0aW9uID0gKDAsIGhlbHBlcnNfMS5yYW5kb21Mb2NhdGlvbikodGhpcy5ncmlkU2l6ZSwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmb29kTG9jYXRpb24nLCB0aGlzLmZvb2RMb2NhdGlvbik7XG4gICAgICAgIC8vIHdoaWxlIChzbmFrZU1hcC5oYXMoYCR7dGhpcy5mb29kTG9jYXRpb24ueH06JHt0aGlzLmZvb2RMb2NhdGlvbi55fWApKSB7XG4gICAgICAgIC8vICAgdGhpcy5mb29kTG9jYXRpb24gPSByYW5kb21Mb2NhdGlvbih0aGlzLmdyaWRTaXplLCB0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZWxvY2F0ZSBmb29kJywgdGhpcy5mb29kTG9jYXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGRyYXdJbWFnZSh0aGlzLmNvbnRleHQsICdmb29kJywgdGhpcy5mb29kTG9jYXRpb24sIHRoaXMuZ3JpZFNpemUpO1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhZ2luYVwiKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB0aGlzLmZvb2RMb2NhdGlvbi54LCB0aGlzLmZvb2RMb2NhdGlvbi55LCA1MCwgNTApO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuU25ha2VHYW1lID0gU25ha2VHYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW92ZUltYWdlID0gZXhwb3J0cy5kcmF3SW1hZ2UgPSBleHBvcnRzLnJhbmRvbUxvY2F0aW9uID0gdm9pZCAwO1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuZnVuY3Rpb24gcmFuZG9tTG9jYXRpb24oc2l6ZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSByYW5kb21JbnRlZ2VyKDEsIHdpZHRoKTtcbiAgICBjb25zdCB5ID0gcmFuZG9tSW50ZWdlcigxLCBoZWlnaHQpO1xuICAgIGxldCB4Um91bmRlZCA9IE1hdGguY2VpbCh4IC8gc2l6ZSkgKiBzaXplO1xuICAgIGxldCB5Um91bmRlZCA9IE1hdGguY2VpbCh5IC8gc2l6ZSkgKiBzaXplO1xuICAgIHJldHVybiB7IHg6IHhSb3VuZGVkLCB5OiB5Um91bmRlZCB9O1xufVxuZXhwb3J0cy5yYW5kb21Mb2NhdGlvbiA9IHJhbmRvbUxvY2F0aW9uO1xuZnVuY3Rpb24gZHJhd0ltYWdlKGNvbnRleHQsIGltYWdlLCBsb2NhdGlvbiwgZ3JpZFNpemUpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWFnZSk7XG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBsb2NhdGlvbi54LCBsb2NhdGlvbi55LCBncmlkU2l6ZSwgZ3JpZFNpemUpO1xufVxuZXhwb3J0cy5kcmF3SW1hZ2UgPSBkcmF3SW1hZ2U7XG5mdW5jdGlvbiByZW1vdmVJbWFnZShjb250ZXh0LCBsb2NhdGlvbiwgZ3JpZFNpemUpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIGxvY2F0aW9uLngsIGxvY2F0aW9uLnksIGdyaWRTaXplLCBncmlkU2l6ZSk7XG59XG5leHBvcnRzLnJlbW92ZUltYWdlID0gcmVtb3ZlSW1hZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU25ha2UgPSB2b2lkIDA7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5jbGFzcyBTbmFrZSB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLmJvZHkgPSBbXTtcbiAgICAgICAgdGhpcy5ib2R5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVzXzEuZGlyZWN0aW9uLnJpZ2h0O1xuICAgICAgICB0aGlzLmJvZHkgPSBbXG4gICAgICAgICAgICB7IGxvY2F0aW9uOiB7IHg6IDEwMCwgeTogNDAwIH0sIGRpcmVjdGlvbjogdHlwZXNfMS5kaXJlY3Rpb24ucmlnaHQgfSxcbiAgICAgICAgICAgIHsgbG9jYXRpb246IHsgeDogNTAsIHk6IDQwMCB9LCBkaXJlY3Rpb246IHR5cGVzXzEuZGlyZWN0aW9uLnJpZ2h0IH0sXG4gICAgICAgICAgICB7IGxvY2F0aW9uOiB7IHg6IDAsIHk6IDQwMCB9LCBkaXJlY3Rpb246IHR5cGVzXzEuZGlyZWN0aW9uLnJpZ2h0IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICB9XG4gICAgbW92ZVNuYWtlKCkge1xuICAgICAgICBjb25zdCBzbmFrZUhlYWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNuYWtlSGVhZCgpKTtcbiAgICAgICAgc25ha2VIZWFkLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAvLyBzd2l0Y2ggKHNuYWtlSGVhZC5kaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gICAgIGNhc2UgZGlyZWN0aW9uLnJpZ2h0OlxuICAgICAgICAvLyAgICAgICBzbmFrZUhlYWQubG9jYXRpb24ueCArPSB0aGlzLnNpemU7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHNuYWtlSGVhZC5sb2NhdGlvbi54ID4gcGxheWFibGVXaWR0aCkgc25ha2VIZWFkLmxvY2F0aW9uLnggPSAwO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBkaXJlY3Rpb24ubGVmdDpcbiAgICAgICAgLy8gICAgICAgICBzbmFrZUhlYWQubG9jYXRpb24ueCAtPSB0aGlzLnNpemU7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHNuYWtlSGVhZC5sb2NhdGlvbi54IDwgMCkgc25ha2VIZWFkLmxvY2F0aW9uLnggPSBwbGF5YWJsZVdpZHRoO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBkaXJlY3Rpb24udXA6XG4gICAgICAgIC8vICAgICAgICAgc25ha2VIZWFkLmxvY2F0aW9uLnkgLT0gdGhpcy5zaXplO1xuICAgICAgICAvLyAgICAgICAgIGlmIChzbmFrZUhlYWQubG9jYXRpb24ueSA8IDApIHNuYWtlSGVhZC5sb2NhdGlvbi55ID0gcGxheWFibGVIZWlnaHQ7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIGRpcmVjdGlvbi5kb3duOlxuICAgICAgICAvLyAgICAgICAgIHNuYWtlSGVhZC5sb2NhdGlvbi55ICs9IHRoaXMuc2l6ZTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoc25ha2VIZWFkLmxvY2F0aW9uLnkgPiBwbGF5YWJsZUhlaWdodCkgc25ha2VIZWFkLmxvY2F0aW9uLnkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChzbmFrZU1hcC5oYXMoYCR7c25ha2VIZWFkLmxvY2F0aW9uLnh9OiR7c25ha2VIZWFkLmxvY2F0aW9uLnl9YCkpIHtcbiAgICAgICAgLy8gICAgIGlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdEZWFkJyk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5ib2R5LnVuc2hpZnQoc25ha2VIZWFkKTtcbiAgICAgICAgLy8gc25ha2VNYXAuc2V0KGAke3NuYWtlSGVhZC5sb2NhdGlvbi54fToke3NuYWtlSGVhZC5sb2NhdGlvbi55fWAsIHNuYWtlSGVhZC5sb2NhdGlvbik7XG4gICAgfVxuICAgIHNuYWtlSGVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keVswXTtcbiAgICB9XG4gICAgc25ha2VUYWlsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggPyB0aGlzLmJvZHkubGVuZ3RoIC0gMSA6IDBdO1xuICAgIH1cbn1cbmV4cG9ydHMuU25ha2UgPSBTbmFrZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kaXJlY3Rpb24gPSB2b2lkIDA7XG52YXIgZGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBkaXJlY3Rpb25bZGlyZWN0aW9uW1wicmlnaHRcIl0gPSAwXSA9IFwicmlnaHRcIjtcbiAgICBkaXJlY3Rpb25bZGlyZWN0aW9uW1wibGVmdFwiXSA9IDFdID0gXCJsZWZ0XCI7XG4gICAgZGlyZWN0aW9uW2RpcmVjdGlvbltcInVwXCJdID0gMl0gPSBcInVwXCI7XG4gICAgZGlyZWN0aW9uW2RpcmVjdGlvbltcImRvd25cIl0gPSAzXSA9IFwiZG93blwiO1xufSkoZGlyZWN0aW9uID0gZXhwb3J0cy5kaXJlY3Rpb24gfHwgKGV4cG9ydHMuZGlyZWN0aW9uID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbnZhciBjYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbnZhciBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3Qgc25ha2VTaXplID0gNTA7XG5jb25zdCBwbGF5YWJsZVdpZHRoID0gY2FudmFzV2lkdGggLSBzbmFrZVNpemU7XG5jb25zdCBwbGF5YWJsZUhlaWdodCA9IGNhbnZhc0hlaWdodCAtIHNuYWtlU2l6ZTtcbnZhciBjdXJyZW50RGlyZWN0aW9uID0gJ3JpZ2h0JztcbnZhciBmb29kTG9jYXRpb247XG52YXIgc25ha2UgPSBbXTtcbmxldCBzbmFrZU1hcCA9IG5ldyBNYXAoKTtcbnZhciBpc1BhdXNlZCA9IGZhbHNlO1xuY29uc3Qgc25ha2VHYW1lID0gbmV3IGdhbWVfMS5TbmFrZUdhbWUoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgc25ha2VTaXplLCBjb250ZXh0KTtcbnNuYWtlR2FtZS5uZXdHYW1lKCk7XG4vLyBmdW5jdGlvbiBkaWRTbmFrZUVhdEZvb2QgKCkge1xuLy8gICAgIGlmIChzbmFrZVswXS54ID09PSBmb29kTG9jYXRpb24ueCAmJiBzbmFrZVswXS55ID09PSBmb29kTG9jYXRpb24ueSkge1xuLy8gICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgZm9vZExvY2F0aW9uLngsIGZvb2RMb2NhdGlvbi55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzSGVhZFJpZ2h0XCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgZm9vZExvY2F0aW9uLngsIGZvb2RMb2NhdGlvbi55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgIHBsYWNlRm9vZCgpO1xuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIGZhbHNlO1xuLy8gfVxuLy8gZnVuY3Rpb24gcGxhY2VGb29kKCkge1xuLy8gICAgIGZvb2RMb2NhdGlvbiA9IGdlbmVyYXRlUmFuZG9tTG9jYXRpb24oKTtcbi8vICAgICBjb25zb2xlLmxvZygnZm9vZExvY2F0aW9uJywgZm9vZExvY2F0aW9uKTtcbi8vICAgICB3aGlsZSAoc25ha2VNYXAuaGFzKGAke2Zvb2RMb2NhdGlvbi54fToke2Zvb2RMb2NhdGlvbi55fWApKSB7XG4vLyAgICAgICAgIGZvb2RMb2NhdGlvbiA9IGdlbmVyYXRlUmFuZG9tTG9jYXRpb24oKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3JlbG9jYXRlIGZvb2QnLCBmb29kTG9jYXRpb24pO1xuLy8gICAgIH1cbi8vICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWdpbmFcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIGZvb2RMb2NhdGlvbi54LCBmb29kTG9jYXRpb24ueSwgc25ha2VTaXplLCBzbmFrZVNpemUpO1xuLy8gfVxuLy8gZnVuY3Rpb24gbW92ZVNuYWtlKCkge1xuLy8gICAgIGNvbnN0IGhlYWRMb2NhdGlvbiA9IHsuLi5zbmFrZVswXX07XG4vLyAgICAgaGVhZExvY2F0aW9uLmRpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XG4vLyAgICAgc3dpdGNoIChjdXJyZW50RGlyZWN0aW9uKSB7XG4vLyAgICAgICAgIGNhc2UgJ3JpZ2h0Jzpcbi8vICAgICAgICAgICAgIGhlYWRMb2NhdGlvbi54ICs9IHNuYWtlU2l6ZTtcbi8vICAgICAgICAgICAgIGlmIChoZWFkTG9jYXRpb24ueCA+IHBsYXlhYmxlV2lkdGgpIGhlYWRMb2NhdGlvbi54ID0gMDtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlICdsZWZ0Jzpcbi8vICAgICAgICAgICAgIGhlYWRMb2NhdGlvbi54IC09IHNuYWtlU2l6ZTtcbi8vICAgICAgICAgICAgIGlmIChoZWFkTG9jYXRpb24ueCA8IDApIGhlYWRMb2NhdGlvbi54ID0gcGxheWFibGVXaWR0aDtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlICd1cCc6XG4vLyAgICAgICAgICAgICBoZWFkTG9jYXRpb24ueSAtPSBzbmFrZVNpemU7XG4vLyAgICAgICAgICAgICBpZiAoaGVhZExvY2F0aW9uLnkgPCAwKSBoZWFkTG9jYXRpb24ueSA9IHBsYXlhYmxlSGVpZ2h0O1xuLy8gICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgJ2Rvd24nOlxuLy8gICAgICAgICAgICAgaGVhZExvY2F0aW9uLnkgKz0gc25ha2VTaXplO1xuLy8gICAgICAgICAgICAgaWYgKGhlYWRMb2NhdGlvbi55ID4gcGxheWFibGVIZWlnaHQpIGhlYWRMb2NhdGlvbi55ID0gMDtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgICBpZiAoc25ha2VNYXAuaGFzKGAke2hlYWRMb2NhdGlvbi54fToke2hlYWRMb2NhdGlvbi55fWApKSB7XG4vLyAgICAgICAgIGlzUGF1c2VkID0gdHJ1ZTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0RlYWQnKTtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICBzbmFrZS51bnNoaWZ0KGhlYWRMb2NhdGlvbik7XG4vLyAgICAgc25ha2VNYXAuc2V0KGAke2hlYWRMb2NhdGlvbi54fToke2hlYWRMb2NhdGlvbi55fWAsIGhlYWRMb2NhdGlvbik7XG4vLyAgICAgc3dpdGNoIChoZWFkTG9jYXRpb24uZGlyZWN0aW9uKSB7XG4vLyAgICAgICAgIGNhc2UgJ3JpZ2h0Jzpcbi8vICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzSGVhZFJpZ2h0XCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4vLyAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIGhlYWRMb2NhdGlvbi54LCBoZWFkTG9jYXRpb24ueSwgc25ha2VTaXplLCBzbmFrZVNpemUpO1xuLy8gICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgJ2xlZnQnOlxuLy8gICAgICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVuaXNIZWFkTGVmdFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBoZWFkTG9jYXRpb24ueCwgaGVhZExvY2F0aW9uLnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlICd1cCc6XG4vLyAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0hlYWRVcFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBoZWFkTG9jYXRpb24ueCwgaGVhZExvY2F0aW9uLnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlICdkb3duJzpcbi8vICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzSGVhZERvd25cIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgaGVhZExvY2F0aW9uLngsIGhlYWRMb2NhdGlvbi55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgICAgY29uc3QgcHJldmlvdXNQYXJ0ID0gc25ha2VbMV07XG4vLyAgICAgaWYoaGVhZExvY2F0aW9uLmRpcmVjdGlvbiA9PT0gcHJldmlvdXNQYXJ0LmRpcmVjdGlvbikge1xuLy8gICAgICAgICBzd2l0Y2ggKGhlYWRMb2NhdGlvbi5kaXJlY3Rpb24pIHtcbi8vICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzpcbi8vICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JvZHlSaWdodFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgcHJldmlvdXNQYXJ0LngsIHByZXZpb3VzUGFydC55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlICdsZWZ0Jzpcbi8vICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JvZHlMZWZ0XCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4vLyAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgIGNhc2UgJ3VwJzpcbi8vICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JvZHlVcFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgcHJldmlvdXNQYXJ0LngsIHByZXZpb3VzUGFydC55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlICdkb3duJzpcbi8vICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JvZHlEb3duXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4vLyAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgc3dpdGNoIChoZWFkTG9jYXRpb24uZGlyZWN0aW9uKSB7XG4vLyAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4vLyAgICAgICAgICAgICAgICAgaWYocHJldmlvdXNQYXJ0LmRpcmVjdGlvbiA9PT0gJ3VwJykge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0N1cnZlVXBSaWdodFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIHByZXZpb3VzUGFydC54LCBwcmV2aW91c1BhcnQueSwgc25ha2VTaXplLCBzbmFrZVNpemUpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzQ3VydmVEb3duUmlnaHRcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlICdsZWZ0Jzpcbi8vICAgICAgICAgICAgICAgICBpZihwcmV2aW91c1BhcnQuZGlyZWN0aW9uID09PSAndXAnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzQ3VydmVVcExlZnRcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0N1cnZlRG93bkxlZnRcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlICd1cCc6XG4vLyAgICAgICAgICAgICAgICAgaWYocHJldmlvdXNQYXJ0LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0N1cnZlUmlnaHRVcFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIHByZXZpb3VzUGFydC54LCBwcmV2aW91c1BhcnQueSwgc25ha2VTaXplLCBzbmFrZVNpemUpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzQ3VydmVMZWZ0VXBcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICBjYXNlICdkb3duJzpcbi8vICAgICAgICAgICAgICAgICBpZihwcmV2aW91c1BhcnQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlbmlzQ3VydmVSaWdodERvd25cIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0N1cnZlTGVmdERvd25cIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwcmV2aW91c1BhcnQueCwgcHJldmlvdXNQYXJ0LnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgaWYgKCFkaWRTbmFrZUVhdEZvb2QoKSkge1xuLy8gICAgICAgICBjb25zdCByZW1vdmVkVGFpbCA9IHNuYWtlLnBvcCgpO1xuLy8gICAgICAgICBzbmFrZU1hcC5kZWxldGUoYCR7cmVtb3ZlZFRhaWwueH06JHtyZW1vdmVkVGFpbC55fWApO1xuLy8gICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgcmVtb3ZlZFRhaWwueCwgcmVtb3ZlZFRhaWwueSwgc25ha2VTaXplLCBzbmFrZVNpemUpO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBiZWZvcmVUYWlsID0gc25ha2Vbc25ha2UubGVuZ3RoIC0gMl07XG4vLyAgICAgY29uc3Qgc25ha2VUYWlsID0gc25ha2Vbc25ha2UubGVuZ3RoIC0gMV07XG4vLyAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgc25ha2VUYWlsLngsIHNuYWtlVGFpbC55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgc3dpdGNoIChiZWZvcmVUYWlsLmRpcmVjdGlvbikge1xuLy8gICAgICAgICBjYXNlICdyaWdodCc6XG4vLyAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JhbGxzUmlnaHRcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgc25ha2VUYWlsLngsIHNuYWtlVGFpbC55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgY2FzZSAnbGVmdCc6XG4vLyAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JhbGxzTGVmdFwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBzbmFrZVRhaWwueCwgc25ha2VUYWlsLnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlICd1cCc6XG4vLyAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JhbGxzVXBcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgc25ha2VUYWlsLngsIHNuYWtlVGFpbC55LCBzbmFrZVNpemUsIHNuYWtlU2l6ZSk7XG4vLyAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgY2FzZSAnZG93bic6XG4vLyAgICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZW5pc0JhbGxzRG93blwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuLy8gICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBzbmFrZVRhaWwueCwgc25ha2VUYWlsLnksIHNuYWtlU2l6ZSwgc25ha2VTaXplKTtcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vIH1cbi8vIGZ1bmN0aW9uIHNldERpcmVjdGlvbihuZXdEaXJlY3Rpb246IGFueSkge1xuLy8gICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBuZXdEaXJlY3Rpb24pIHJldHVybjtcbi8vICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gJ3JpZ2h0JyAmJiBuZXdEaXJlY3Rpb24gPT09ICdsZWZ0JykgcmV0dXJuO1xuLy8gICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSAnbGVmdCcgJiYgbmV3RGlyZWN0aW9uID09PSAncmlnaHQnKSByZXR1cm47XG4vLyAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09ICd1cCcgJiYgbmV3RGlyZWN0aW9uID09PSAnZG93bicpIHJldHVybjtcbi8vICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIG5ld0RpcmVjdGlvbiA9PT0gJ3VwJykgcmV0dXJuO1xuLy8gICAgIGN1cnJlbnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb25cbi8vIH1cbi8vIGRvY3VtZW50Lm9ua2V5ZG93biA9IGtleUxpc3RlbmVyO1xuLy8gZnVuY3Rpb24ga2V5TGlzdGVuZXIoZTogYW55KSB7XG4vLyAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuLy8gICAgIGlmIChlLmtleUNvZGUgPT0gJzM4Jykge1xuLy8gICAgICAgICBzZXREaXJlY3Rpb24oJ3VwJyk7XG4vLyAgICAgfVxuLy8gICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PSAnNDAnKSB7XG4vLyAgICAgICAgIHNldERpcmVjdGlvbignZG93bicpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzM3Jykge1xuLy8gICAgICAgICBzZXREaXJlY3Rpb24oJ2xlZnQnKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09ICczOScpIHtcbi8vICAgICAgICAgc2V0RGlyZWN0aW9uKCdyaWdodCcpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT0gJzMyJykge1xuLy8gICAgICAgc25ha2VHYW1lLmlzUGF1c2VkID0gIXNuYWtlR2FtZS5pc1BhdXNlZDtcbi8vICAgICB9XG4vLyB9XG4vLyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4vLyAgICAgLy8gcGxhY2VGb29kKCk7XG4vLyAgICAgc25ha2UgPSBbXG4vLyAgICAgICAgIHsgeDogMTAwLCB5OiA0MDAgfSxcbi8vICAgICAgICAgeyB4OiA1MCwgeTogNDAwIH0sXG4vLyAgICAgICAgIHsgeDogMCwgeTogNDAwIH0sXG4vLyAgICAgXTtcbi8vICAgICBzbmFrZU1hcCA9IG5ldyBNYXAoXG4vLyAgICAgICAgIHNuYWtlLm1hcChvYmplY3QgPT4ge1xuLy8gICAgICAgICAgIHJldHVybiBbYCR7b2JqZWN0Lnh9OiR7b2JqZWN0Lnl9YCwgb2JqZWN0XTtcbi8vICAgICAgICAgfSksXG4vLyAgICAgICApO1xuLy8gICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVuaXNIZWFkUmlnaHRcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgc25ha2VbMF0ueCwgc25ha2VbMF0ueSwgc25ha2VTaXplLCBzbmFrZVNpemUpO1xuLy8gfVxuLy8gc3RhcnRHYW1lKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==