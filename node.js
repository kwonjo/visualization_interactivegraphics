// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Force directed graph
// Heavily based on: http://code.google.com/p/fidgen/

// Notice how we are using inheritance here!
// We could have just stored a reference to a VerletParticle object
// inside the Node object, but inheritance is a nice alternative

class Node extends VerletParticle2D {
  constructor(pos) {
    super(pos);
  }

  // Override the display method
  display() {
    fill(253, 122, 131);
    stroke(153, 204, 153);
    strokeWeight(2);
    ellipse(this.x, this.y, 50, 50);
  }
}