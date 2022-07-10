
var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var context = canvas.getContext("2d");

const snakeSize = 50;
const playableWidth = canvasWidth - snakeSize;
const playableHeight = canvasHeight - snakeSize
var currentDirection = 'right';
var foodLocation;
var snake = []
let snakeMap = new Map();
var isPaused = false;

setInterval(() => {
    if(!isPaused) {
        moveSnake();
    }  
}, 100);

function play() {
    isPaused = false;
}

function pause() {
    isPaused = true;
}

function didSnakeEatFood () {
    if (snake[0].x === foodLocation.x && snake[0].y === foodLocation.y) {
        var img = document.getElementById("background");
        context.drawImage(img, foodLocation.x, foodLocation.y, snakeSize, snakeSize);
        var img = document.getElementById("penisHeadRight");
        context.drawImage(img, foodLocation.x, foodLocation.y, snakeSize, snakeSize);
        placeFood();
        return true;
    }
    return false;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomLocation() {
    const x = randomInteger(1, playableWidth);
    const y = randomInteger(1, playableHeight);
    let xRounded = Math.ceil(x / snakeSize) * snakeSize;
    let yRounded = Math.ceil(y / snakeSize) * snakeSize;
    return { x: xRounded, y: yRounded };
}

function placeFood() {
    foodLocation = generateRandomLocation();
    console.log('foodLocation', foodLocation);
    while (snakeMap.has(`${foodLocation.x}:${foodLocation.y}`)) {
        foodLocation = generateRandomLocation();
        console.log('relocate food', foodLocation);
    }

    var img = document.getElementById("vagina");
    context.drawImage(img, foodLocation.x, foodLocation.y, snakeSize, snakeSize);
}

function moveSnake() {

    const headLocation = {...snake[0]};
    headLocation.direction = currentDirection;
    switch (currentDirection) {
        case 'right':
            headLocation.x += snakeSize;
            if (headLocation.x > playableWidth) headLocation.x = 0;
            break;
        case 'left':
            headLocation.x -= snakeSize;
            if (headLocation.x < 0) headLocation.x = playableWidth;
            break;
        case 'up':
            headLocation.y -= snakeSize;
            if (headLocation.y < 0) headLocation.y = playableHeight;
            break;
        case 'down':
            headLocation.y += snakeSize;
            if (headLocation.y > playableHeight) headLocation.y = 0;
            break;
    }

    if (snakeMap.has(`${headLocation.x}:${headLocation.y}`)) {
        isPaused = true;
        console.log('Dead');
        return;
    }

    snake.unshift(headLocation);
    snakeMap.set(`${headLocation.x}:${headLocation.y}`, headLocation);

    switch (headLocation.direction) {
        case 'right':
            var img = document.getElementById("penisHeadRight");
            context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
            break;
        case 'left':
            var img = document.getElementById("penisHeadLeft");
            context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
            break;
        case 'up':
            var img = document.getElementById("penisHeadUp");
            context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
            break;
        case 'down':
            var img = document.getElementById("penisHeadDown");
            context.drawImage(img, headLocation.x, headLocation.y, snakeSize, snakeSize);
            break;
    }

    const previousPart = snake[1];
    if(headLocation.direction === previousPart.direction) {
        switch (headLocation.direction) {
            case 'right':
                var img = document.getElementById("penisBodyRight");
                context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                break;
            case 'left':
                var img = document.getElementById("penisBodyLeft");
                context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                break;
            case 'up':
                var img = document.getElementById("penisBodyUp");
                context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                break;
            case 'down':
                var img = document.getElementById("penisBodyDown");
                context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                break;
        }
    } else {
        var img = document.getElementById("background");
        context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
        switch (headLocation.direction) {
            case 'right':
                if(previousPart.direction === 'up') {
                    var img = document.getElementById("penisCurveUpRight");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                } else {
                    var img = document.getElementById("penisCurveDownRight");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                }
                break;
            case 'left':
                if(previousPart.direction === 'up') {
                    var img = document.getElementById("penisCurveUpLeft");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                } else {
                    var img = document.getElementById("penisCurveDownLeft");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                }
                break;
            case 'up':
                if(previousPart.direction === 'right') {
                    var img = document.getElementById("penisCurveRightUp");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                } else {
                    var img = document.getElementById("penisCurveLeftUp");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                }
                break;
            case 'down':
                if(previousPart.direction === 'right') {
                    var img = document.getElementById("penisCurveRightDown");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                } else {
                    var img = document.getElementById("penisCurveLeftDown");
                    context.drawImage(img, previousPart.x, previousPart.y, snakeSize, snakeSize);
                }
                break;
        }
    }

    if (!didSnakeEatFood()) {
        const removedTail = snake.pop();
        snakeMap.delete(`${removedTail.x}:${removedTail.y}`);
        var img = document.getElementById("background");
        context.drawImage(img, removedTail.x, removedTail.y, snakeSize, snakeSize);
    }

    const beforeTail = snake[snake.length - 2];
    const snakeTail = snake[snake.length - 1];
    var img = document.getElementById("background");
    context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
    switch (beforeTail.direction) {
        case 'right':
            var img = document.getElementById("penisBallsRight");
            context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
            break;
        case 'left':
            var img = document.getElementById("penisBallsLeft");
            context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
            break;
        case 'up':
            var img = document.getElementById("penisBallsUp");
            context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
            break;
        case 'down':
            var img = document.getElementById("penisBallsDown");
            context.drawImage(img, snakeTail.x, snakeTail.y, snakeSize, snakeSize);
            break;
    }
}

function setDirection(newDirection) {
    if (currentDirection === newDirection) return;
    if (currentDirection === 'right' && newDirection === 'left') return;
    if (currentDirection === 'left' && newDirection === 'right') return;
    if (currentDirection === 'up' && newDirection === 'down') return;
    if (currentDirection === 'down' && newDirection === 'up') return;
    currentDirection = newDirection
}

document.onkeydown = keyListener;

function keyListener(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        setDirection('up');
    }
    else if (e.keyCode == '40') {
        setDirection('down');
    }
    else if (e.keyCode == '37') {
        setDirection('left');
    }
    else if (e.keyCode == '39') {
        setDirection('right');
    }
    else if (e.keyCode == '32') {
        isPaused = !isPaused;
    }
}

function startGame() {
    placeFood();
    snake = [
        { x: 100, y: 400 },
        { x: 50, y: 400 },
        { x: 0, y: 400 },
    ];
    snakeMap = new Map(
        snake.map(object => {
          return [`${object.x}:${object.y}`, object];
        }),
      );
      var img = document.getElementById("penisHeadRight");
      context.drawImage(img, snake[0].x, snake[0].y, snakeSize, snakeSize);
}
startGame()