// The Nature of Code

function Cluster(n, d, center, tempData) {
    // A cluster is a grouping of nodes
    this.nodes = [];
    // Set the diameter
    this.diameter = d; 
    this.data = tempData;

    // Create the nodes
    for (let i = 0; i < n; i++) {
      // We can't put them right on top of each other
      this.nodes.push(new Node(center.add(Vec2D.randomVector()), this.data[i]));
    }
    // Connect all the nodes with a Spring
    for (var i = 0; i < this.nodes.length-1; i++) {
      for (var j = i+1; j < this.nodes.length; j++) {
        // A Spring needs two particles, a resting length, and a strength
        physics.addSpring(new VerletSpring2D(this.nodes[i], this.nodes[j], this.diameter, 0.03));
        //physics.addSpring(new VerletSpring2D(this.nodes[i], this.nodes[j], 400, 0.0009));
      }
    }

  this.display = function() {
    // Show all the nodes
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].display();
    }
  }
  

  // Draw all the internal connections
  this.showConnections= function() {
    stroke(153, 204, 153);
    strokeWeight(1);
    for (let i = 0; i < this.nodes.length - 1; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        line(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
      }
    }
  }
}
