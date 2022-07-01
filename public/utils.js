"use strict";
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
