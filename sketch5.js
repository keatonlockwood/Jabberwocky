// var xoff1 = 0;
// var xoff2 = 10000;
var inc = 0.01;
var scl = 70;
var cols, rows;


function setup() {
  createCanvas(windowWidth, 900);
  cols = floor(width / scl);
  rows = floor(height / scl);
  textSize(40);
  textAlign(LEFT);
  u = "And, as in uffish thought he stood, The Jabberwock, with eyes of flame, Came whiffling through the tulgey wood,       And burbled as it came!";
  fill(20);
  text(u, 600, 200, 550, 300);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) / 2;
      var angle = noise(xoff, yoff) / TWO_PI;
      var v = p5.Vector.fromAngle(random(TWO_PI));
      xoff += scl;
      stroke(0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(300, 60, scl, 100);




      textSize(18);
      textAlign(LEFT);
      s = "Jabberwock";
      fill(66, 244, 217);
      text(s, 100, 500, 520, 180);
    }
    yoff += inc;

  }

}


  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);
  //
  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 20, 20);
