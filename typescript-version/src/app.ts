import { SnakeGame } from "./game";

var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var context = canvas.getContext("2d") as CanvasRenderingContext2D;

const snakeSize = 50;
const playableWidth = canvasWidth - snakeSize;
const playableHeight = canvasHeight - snakeSize
var currentDirection = 'right';
var foodLocation: any;
var snake: any[] = []
let snakeMap = new Map();
var isPaused = false;


const snakeGame = new SnakeGame(canvasWidth, canvasHeight, snakeSize, context);
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