let canvasBorderX = 256;
let canvasBorderY = 256;
let maxNum = canvasBorderX * canvasBorderY;
let ind = 2;

function setup() {
  createCanvas(canvasBorderX, canvasBorderY);
  background("black");
}

function plotWhitePixel(x, y) {
  set(x, y, "white");
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n/2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function convertNumToCord(n) {
  let y = Math.floor(n / canvasBorderX);
  let x = n % canvasBorderX;
  return [x - 1, y];
}

function loopNums() {
  for (ind; ind <= maxNum; ind++) {
    if (isPrime(ind)) {
      let [x, y] = convertNumToCord(ind);
      plotWhitePixel(x, y);
    }
  }
}

function draw() {
  if(ind <= maxNum) {
    loopNums();
    updatePixels();
  }
  else {
    noLoop();
  }
}