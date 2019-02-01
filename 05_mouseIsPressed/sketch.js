function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
	stroke(255);
  if (mouseIsPressed == true) {
  	line(300, 300, mouseX, mouseY);
  }
}