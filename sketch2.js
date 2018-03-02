function setup(){
    createCanvas(800, 800);
}
var img2;
var xoff = 0.0;
var mySound;
function preload() {
  img2 = loadImage('images/notes.gif');
  soundFormats('mp3', 'ogg');
  mySound = loadSound('images/heroes.mp3');
}

function draw(){
    background(0, 191, 255);

    //rectangles
    fill(255, 200, 0);
    rect(400, 400, 200, 200);
    //red triangle
    fill(255, 0, 50);
    triangle(400, 600, 400, 800, 600, 750);
    //purple triangle
    fill(50, 0, 150);
    triangle(15, 701, 600, 20, 200, 700);
    //three ellipses
    fill(255, 150, 0);
    ellipse(400, 100, 20, 20);
    fill(255, 100, 0);
    ellipse(400, 200, 40, 50);
    fill(255, 50, 0);
    ellipse(400, 300, 50, 70);
    noFill();
    stroke(255, 102, 0);
    stroke(0, 0, 0);

    //curves
    bezier(800, 20, 10, 10, 90, 90, 15, 700);
    bezier(800, 100, 10, 10, 90, 90, 15, 700);    
    bezier(800, 200, 10, 10, 90, 90, 15, 700);
    bezier(800, 300, 100, 10, 90, 90, 15, 700);
    bezier(800, 500, 100, 10, 90, 90, 15, 700);
   
    //text
    strokeWeight(1);
    textSize(32);
    var s = 'This is a yellow box.';
    fill(100);
    text(s, 410, 410, 200, 200);

    //Shade images
    var img = createImage(66, 66);
    img.loadPixels();
    for (var i = 0; i < img.width; i++) {
    for (var j = 0; j < img.height; j++) {
        img.set(i, j, color(0, 90, 102, (i % img.width) * 2));
    }
    }
    img.updatePixels();
    image(img, 17, 17);
    image(img, 50, 50);
    
    //complex continuous purple shapes
    strokeWeight(3);
    beginShape();
    fill(150, 0, 150);
    vertex(400, 400);
    vertex(60, 400);
    vertex(400, 600);
    vertex(200, 600);
    vertex(300, 800);
    vertex(300, 50);
    endShape(CLOSE);

    beginShape();
    fill(0, 150, 150);
    // Exterior part of shape, clockwise winding
    vertex(-40, -40);
    vertex(40, -40);
    vertex(40, 40);
    vertex(-40, 40);
    // Interior part of shape, counter-clockwise winding
    beginContour();
    vertex(-20, -20);
    vertex(-20, 20);
    vertex(20, 20);
    vertex(20, -20);
    endContour();
    endShape(CLOSE);

    //Stroke
    noFill();
    strokeWeight(3);
    beginShape();
    vertex(20, 20);
    quadraticVertex(80, 20, 50, 50);
    quadraticVertex(20, 80, 80, 80);
    vertex(300, 41);
    endShape();

    //play with mouse
    var t = map(mouseX, 0, width, -5, 5);
    curveTightness(t);
    beginShape();
    curveVertex(100, 260);
    curveVertex(100, 260);
    curveVertex(600, 230);
    curveVertex(600, 600);
    curveVertex(230, 600);
    curveVertex(250, 600);
    curveVertex(100, 260);
    curveVertex(300, 260);
    endShape();
    
    //text
    textSize(20);
    var s = 'Play with the line with the mouse';
    fill(255);
    text(s, 605, 500, 200, 200);

    //text
    textSize(15);
    var u = 'Click on any key';
    fill(150);
    text(u, 500, 600, 100, 100);

    //key pressed purple square changes brighter purple
    if (keyIsPressed === true) {
        fill(150, 0, 150);
      } else {
        fill(100, 0, 150);
      }
      rect(600, 600, 750, 750);

      if(mouseIsPressed) {
        fill(100, 0, 150);
        ellipse(mouseX, mouseY, 50, 100);
      }

    //image of music notes
    image(img2, 10, 700, 200, 99);

    //noise
    xoff = xoff + 0.05;
    var n = noise(xoff) * width;
    line(n, 0, n, height);
    
    //mp3 sound
    mySound.setVolume(0.12);
    mySound.play();
}
