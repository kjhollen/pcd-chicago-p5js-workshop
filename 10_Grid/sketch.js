function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  
  background(0);
  for (let x = 100; x <= 500; x += 50) {
    for (let y = 100;  y <= 500; y += 50) {
      ellipse(x, y, 50, 50);
    }
  }
}