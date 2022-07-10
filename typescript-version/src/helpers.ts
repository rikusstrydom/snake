import { location } from "./types";

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomLocation(size: number, width: number, height: number) {
  const x = randomInteger(1, width);
  const y = randomInteger(1, height);
  let xRounded = Math.ceil(x / size) * size;
  let yRounded = Math.ceil(y / size) * size;
  return { x: xRounded, y: yRounded };
}

export function drawImage(context: CanvasRenderingContext2D, image: string, location: location, gridSize: number) {
  const img = document.getElementById(image) as HTMLImageElement;
  console.log(context);
  
  context.drawImage(img, location.x, location.y, gridSize, gridSize);
}

export function removeImage(context: CanvasRenderingContext2D, location: location, gridSize: number) {
  const img = document.getElementById('clear') as HTMLImageElement;
  context.drawImage(img, location.x, location.y, gridSize, gridSize);
}