# Final Project- Interactive Graphics and Critical Code

Name:  Jo Kwon 

Date: April 19, 2018

## Project: What is ART? 

### Conceptual Description

I've been defining different terms throughoutthis semester and I believe that a crucial term in this class is "art." I want to explore the definitions of "art" from quotes from artists. I found 99 quotes from famous artists defining "art." The concept is to define this vague term and understand the meaning of "art." Art will also be expressed through the user which will be explained in the interaction description.   

### Design (EXTRA EXPLANATION)
[Color Selection (2018)](https://www.pantone.com/color-of-the-year-2018-tools-for-designers) 

![PANTONE](/images/color2018.png)

Violet: color(140, 109, 211)
Peach: color(253, 122, 131)
Lettuce Green: color(53, 204, 153)
Yellow: color(242, 240, 161)

### Interaction Description

How do you expect users to interact with your piece. How is your piece to be set up in physical space? Who is the intended audience? How does your piece inform the user through interaction or amplifies those your project's main concepts and ideas?

The piece is divided into two sketches. The first one includes the five topics of the definition of art from the 99 quotes. The network word cloud will work with the webs. The interaction is seeing the sketch. When the mouse is on top of a topic, one of an image from an artist in the topic will be shown. The second one allows users to draw whatever they want to define art. Different colors of strokes can be used for the drawing. With a large screen, people will be able to see the texts and the images closely. The intended user for the piece are people who are interested in art. The users receive information of art and also express art on their own. Various interactions with the piece allows users to better understand the meaning of art and how it is challenging to define art overall. 

### Extension 

Do you intend to extend a piece that you've created throughout the semester? What elements are you adding or subtracting from the previous piece? How do these extensions/subtractions further develop the conceptual and interactive elements of your work?

I am extending my piece from second and third piece. First of all, I am using text mining methods for the piece with R and Mallet (potentially LDA) for exploratory data analysis. I will use the results of the topic modeling. Secondly, I am using the pantone colors that I have used in both pieces. I am adding more elements by adding another sketch of allowing the user to express art. In addition, I will add five images for each topic. 

![Previous Piece](/images/project3.png)

### Drawing or Sketch of Extended Piece

![Sketch of Extended Piece](/images/finalproject_storyboard.jpg)

### Technical Details

* Libraries
p5.dom.js
p5.sound.js

* Hosting Platform
[Jo's ART](https://kwonjo.github.io/visualization_interactivegraphics/sketch6.html)

* Explanation of your codebase  

1. Load Table
The table of the data is loaded into p5.js. 

2. Load Sound
The short sound clip by Joey Pecoraro's *Ask For Love* is loaded. 

3. Load Font
Typewriter font is loaded on p5.js. 

4. Clusters and nodes
Daniel Shiffman's The Nature of Code's physics libraries were used for creating clusters and nodes. 


```js
function preload(){
  //data
  table = loadTable('data/.csv', 'csv', 'header');
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/askforlove.m4a');
  //font
  fontItalic = loadFont('images/typewriter.ttf');
}

functions setup(){
  createCanvas(windowWidth, windowHeight);
  loadData();
  // Initialize the physics
  physics = new VerletPhysics2D();
  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));
  // Spawn a new random graph
  cluster = new Cluster(number of nodes, distance of connections, x, y); // 5 clusters
}

function loadData(){
    //Access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    topic1= table.getColumn("2");
    topic2 = table.getColumn("2");
    topic3 = table.getColumn("3");
    topic4 = table.getColumn("4");
    topic5 = table.getColumn("5");
}

function draw(){
  // Update the physics world
  physics.update();
  background(49, 25, 56); //dark violet
  // Update the physics world
  physics.update();
  // Display all points
  if (showParticles) {
    cluster.display();
    cluster2.display();
    cluster3.display();
    cluster4.display();
    cluster5.display();
  }

  // If we want to see the physics
  if (showPhysics) {
    cluster.showConnections();
    cluster2.showConnections();
    cluster3.showConnections();
    cluster4.showConnections();
    cluster5.showConnections();
  }
  }

// Key press commands
function keyPressed() {
  if (key == 'c' || key == 'C') {
    showPhysics = !showPhysics;
    console.log('c pressed');
    if (!showPhysics) showParticles = true;
  } 
  else if (key == 'p' || key == 'P') {
    showParticles = !showParticles;
    console.log('p pressed');
    if (!showParticles) showPhysics = true;
  } 
}

// sound
function mousePressed(){
  if (mySound.isPlaying()){ //.isPlaying() returns a boolean
    mySound.stop();
  } else {
    mySound.play();
  }
}

}
```
