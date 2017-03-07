// var xoff1 = 0;
// var xoff2 = 10000;
var start = 0;
var inc = 0.09;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noiseDetail(8);
  background(0);


  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 4; x < width; x++) {
    stroke(255);
    var y = noise(xoff) * height/2;
    vertex(x, y);

    xoff += inc + 0.01;

  }
  endShape();

  beginShape();
  var xoff = start;
  for (var x = 6; x < width; x++) {
    stroke(255,0,0);
    var y = noise(xoff) * height / 2 + 25;
    vertex(x, y);

    xoff += inc + 0.02;

  }
  endShape();

  beginShape();
  var xoff = start;
  for (var x = 8; x < width; x++) {
    stroke(0,255,0);
    var y = noise(xoff) * height / 2 + 100;
    vertex(x, y);

    xoff += inc + 0.03;

  }
  endShape();

  beginShape();
  var xoff = start;
  for (var x = 10; x < width; x++) {
    stroke(0,0,255);
    var y = noise(xoff) * height / 2 + 50;
    vertex(x, y);

    xoff += inc + 0.04;

  }
  endShape();

  start += inc;

  textSize(30);
  textAlign(LEFT);
  s = "Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch!";
  fill(0, 255, 0);
  text(s, 100, 400, 520, 180); // Text wraps within text box
  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);
  //
  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 20, 20);
}
