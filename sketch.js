// we're making a colour spectrum across the canvas
// when mouseX = 0, we want the background to = 0
// when mouseX = 600, we want the background to = 255

// map will take any value and map it to a range

// 0-600 ----- mouseX
// 0-255 ----- col

// map(mouseX, 0, 600, 0, 255)
// col = map

var col = 0;
var r = 0;
var b = 150;



function setup () {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {

  // background
  r = map(mouseX, 0, windowWidth, 0, 100);
  b = map(mouseX, windowWidth, 400, 100, 0);
  background(r, 0, b);
  // ellipse
  noStroke();
  fill(random(200), 200, 200);
  ellipse(mouseX, mouseY, 80, 80);
  textSize(30);
  s = "`Twas brillig, and the slithy toves Did gyre and gimble in the wabe:";
  fill(44, 255, 255);
  text(s, 250, 250, 460,180); // Text wraps within text box
}
