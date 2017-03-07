function setup () {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(RGB);
  background(252, 252, 242);
  textSize(30);
  textAlign(LEFT);
  s = "He took his vorpal sword in hand: Long time the manxome foe he sought--    So rested he by the Tumtum tree,    And stood awhile in thought.";
  fill(255, 30, 50);
  text(s, 500, 200, 530, 180);
}

function draw() {
  fill(random(255), 30, 50);
  var c = map(mouseY, 0, height, 1, 50);
  rect(mouseX, mouseY, c, c);
}
