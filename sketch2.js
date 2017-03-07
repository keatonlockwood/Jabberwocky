//circle appears at random location when program starts

// VARIABLE OBJECT
var spot = {
  x: 100,
  y: 50,
  s: 30,
  t: 150
};

//(0, 50) random number between 0 and 50
var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  col.r = random(1, 50);
  col.g = random(15, 255);
  col.b = random(0, 255);
  spot.x = random(0, width);
  spot.y = random(0, height);
  spot.s = random(0, width);
  spot.t = random(0, height)
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, 30, 30);
  rect(spot.s, spot.t, 10, 10);
  // textAlign(vertAlign(CENTER));
  textSize(30);
  textAlign(CENTER);
  s = "All mimsy were the borogoves, And the mome raths outgrabe.";
  fill(44, 255, 255);
  text(s, 300, 160, 460,180); // Text wraps within text box

}
