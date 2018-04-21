// The Nature of Code

function Node(pos, tempData) {
    this.data = tempData;
  
    VerletParticle2D.call(this, pos);
    this.click = function(mx, my){
      // Check to see if a point is inside the circle
      if (mouseX > pos && mouseX < pos &&
            mouseY > pos && mouseY < pos ){
          fill(0);
          text(doc_id[0], this.x, this.y);
        }
    }
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
  