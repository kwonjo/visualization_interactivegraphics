// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Node(pos, tempData) {
  this.data = tempData;

  VerletParticle2D.call(this,pos);

  // Override the display method
  this.display = function(){
    textSize(20);
    textFont(fontItalic);
    textAlign(CENTER);
    fill(253, 122, 131);
    noStroke();
    strokeWeight(2);
    //ellipse(this.x, this.y, 50, 30);
    text(this.data, this.x, this.y) 
  }
}

Node.prototype = Object.create(VerletParticle2D.prototype);
Node.prototype.constructor = Node;
