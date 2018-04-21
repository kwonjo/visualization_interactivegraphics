// The Nature of Code

function Node(pos, tempData) {
    this.data = tempData;
  
    VerletParticle2D.call(this, pos);
  
    // Override the display method
    this.display = function(){
      textSize(23);
      textFont(fontItalic);
      textAlign(CENTER);
      fill(242,105,104);
      noStroke();
      strokeWeight(1);
      //ellipse(this.x, this.y, 50, 30);
      text(this.data, this.x, this.y) 
    }
  }
  
  Node.prototype = Object.create(VerletParticle2D.prototype);
  Node.prototype.constructor = Node;
  