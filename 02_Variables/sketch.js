function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  
  let x = 100;
  line(x, 50, x, 350);

  x = x + 20;
  line(x, 50, x, 350);

  x = x + 20;
  line(x, 50, x, 350);
}