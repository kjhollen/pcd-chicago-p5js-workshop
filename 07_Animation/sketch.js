let x = 0;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  strokeWeight(5);
}

function draw() {
  background(0);
  
  line(x, 0, x, height);
  
  // move to the right for next time.
  x = x + 1;
  // wrap around to left side.
  if (x > width) {
    x = 0;
  }
}