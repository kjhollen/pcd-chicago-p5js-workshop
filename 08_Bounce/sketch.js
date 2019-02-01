let x = 20;
let speed = 1;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  strokeWeight(5);
}

function draw() {
  background(0);
  line(x, 0, x, height);
  x = x + speed;
  
  if (x >= width) {
    speed = -1;
  } else if (x <= 0) {
    speed = 1;
  }
}