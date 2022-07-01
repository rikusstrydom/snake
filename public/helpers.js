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
    context.drawImage(img, location.x, location.y, gridSize, gridSize);
}
exports.drawImage = drawImage;
function removeImage(context, location, gridSize) {
    const img = document.getElementById('clear');
    context.drawImage(img, location.x, location.y, gridSize, gridSize);
}
exports.removeImage = removeImage;
