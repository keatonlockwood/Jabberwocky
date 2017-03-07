var num = 2000;
var area = 40;

var ax = [];
var ay = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(100);
}

function draw() {

  background(242, 48, 48);

  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-area, area);
  ay[num - 1] += random(-area, area);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    var val = j / num * 204.0 + 51;
    stroke(val);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
  textSize(25);
  textAlign(LEFT);
  s = "One, two! One, two!  And through and through The vorpal blade went snicker-snack!                   He left it dead, and with its head                          He went galumphing back.";
  fill(255);
  text(s, 400, 200, 550, 400);
}
