function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
	noStroke();
  if (mouseIsPressed == true) {
    let s = map(mouseX, 0, width, 5, 100);
    let c = map(mouseY, 0, height, 0, 255);
    fill(c);
    ellipse(mouseX, mouseY, s, s);
  }
}