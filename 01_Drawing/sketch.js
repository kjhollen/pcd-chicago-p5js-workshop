function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(0);

  // 0-255 grayscale
  stroke(255);

  // line (x1, y1, x2, y2)
  line(10, 20, 190, 20);

  // red, green, blue 0-255
  fill(54, 104, 204);

  // no outline
  noStroke();

  // rect (x, y, w, h) where x, y is top left
  rect(210, 20, 80, 160);

  // ellipse(x, y, w, h) where x, y is in the center
  ellipse(100, 200, 100, 100);

  // white outline, no fill
  noFill();
  stroke(255);

  // draws on top!
  rect(100, 200, 100, 100);

  // triangle(x1, y1, x2, y2, x3, y3)
  triangle(300, 300, 390, 300, 300, 390);
}