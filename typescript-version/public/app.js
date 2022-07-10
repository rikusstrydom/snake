define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.direction = void 0;
    var direction;
    (function (direction) {
        direction[direction["right"] = 0] = "right";
        direction[direction["left"] = 1] = "left";
        direction[direction["up"] = 2] = "up";
        direction[direction["down"] = 3] = "down";
    })(direction = exports.direction || (exports.direction = {}));
});
define("helpers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("snake", ["require", "exports", "types"], function (require, exports, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Snake = void 0;
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
});
define("game", ["require", "exports", "helpers", "snake"], function (require, exports, helpers_1, snake_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SnakeGame = void 0;
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
});
define("app", ["require", "exports", "game"], function (require, exports, game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
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
