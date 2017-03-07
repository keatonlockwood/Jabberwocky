
var text = "`Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe.";
var words = text.split(" ");
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}
function draw() {
  background(0);
  textSize(72);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(random(255));
    text(words[i], random(width), random(height));
  }
}
