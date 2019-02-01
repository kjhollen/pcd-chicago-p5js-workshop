function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  
  for (let x = 20; x <= 580; x = x + 20) {
    line(x, 20, x, 580);
  }
}