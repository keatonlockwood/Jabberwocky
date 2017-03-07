
var inc = 0.01;

function setup() {
  createCanvas(800, 400);
  createP("This is Perlin Noise. When reset, the composition will change.");

  // var button = createButton("Reset");
  // button.mousePressed(resetSketch);
}


// function resetSketch() {
//   background(20);
//
//
//   noFill();
//   beginShape();
//   for (var x = 10; x < width; x++) {
//     stroke(0, 255, 255);
//
//     vertex(x, random(height));
//     x = x + 5;
//   }
//   endShape();
//
//   fill(255);
//   ellipse(x, y, 24, 24);
//
// }

function draw() {
    background(20);

    noFill();
    beginShape();
    var xoff = start;
    for (var x = 8; x < width; x++) {
      stroke(0, 255, 255);

      vertex(x, random(height));
      x = x + 5;
    }
    endShape();


    fill(255);
    ellipse(x, y, 24, 24);

}
