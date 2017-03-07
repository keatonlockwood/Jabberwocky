var distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  distance = dist(0, 0, width, height);
}

function draw() {
  background(255,100,110);

  for(var i = 10; i <= width; i += 50) {
    for(var j = 5; j <= height; j += 50) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/distance * 80;
      rect(i, j, size, size);


    }
    textSize(30);
    textAlign(LEFT);
    s = "And, has thou slain the Jabberwock? Come to my arms, my beamish boy! O frabjous day! Callooh! Callay!'        He chortled in his joy.";
    fill(255);
    text(s, 500, 100, 520, 180);
  }
}
