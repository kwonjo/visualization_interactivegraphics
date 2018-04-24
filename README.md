# Final Project- Interactive Graphics and Critical Code

Name:  Jo Kwon 

Date: April 19, 2018 (revised on April 24, 2018)

## [Project: What is art /ärt/?](https://kwonjo.github.io/visualization_interactivegraphics/sketch6.html)


### Conceptual Description

I've been defining different terms such as happiness and artificial intelligence(AI) throughout this semester and I believe that a crucial term in this class is "art." I wanted to explore the definitions of "art" from quotes from various artists. I found [99 quotes]( http://www.artpromotivate.com/2012/09/famous-inspirational-art-quotes.html) from famous artists defining "art." The concept of this piece is to define the vague term and understand the meaning of "art." Art will also be expressed and created through the user in the other sketch which is on the same tab.

Two methods are mainly used for this piece. The first is text mining methods and the second is using p5.js for interactive graphics. 

I used various approaches in text mining. 
1st Step: Obtaining Data
The data set I used was the 99 Inspirational Art Quotes from Famous Artists. 

2nd Step: Text Cleaning and Exploratory Data Analysis with R

3rd Step: Topic Modeling with Mallet and LDA

4th Step: Visualize Data with p5.js

5th Step: Interaction and Interpretation by Users 



### Interaction Description

The piece includes two sketches. The first one includes the five topics of the definition of art from the 99 quotes. The network word cloud will work with the webs. The interaction is seeing the sketch. When the mouse is on top of a topic, one of an image from an artist in the topic will be shown. The second one enables users to draw whatever they want with three pantone colors to define art. Different colors of strokes can be used for the drawing. With a large screen, people will be able to see the texts and the images closely. 
The intended user for the piece are people who are interested in art. The users receive information of art and also express art on their own. Various interactions with the piece allows users to better understand the meaning of art and how it is challenging to define art overall. Interacting with the text information and being able to paint with strokes which is abstract drawings are requiring the users to interact with the concept of art in different approaches. The user uses different methods and they will be able to contemplate what art means.  

### Design (EXTRA EXPLANATION)

#### No. 1 Sketch

![colors](/images/fin_colors.jpg)

Ruby Grapefuit: #F26968, color(242,105,104)
Limestone: #6CBF84, color(223,226,210)
Moss River: #323339, color(50,51,57)

#### No. 2 Sketch

[Color Selection PANTONE (2018)](https://www.pantone.com/color-of-the-year-2018-tools-for-designers) 

![PANTONE](/images/color2018.png)

Purple: color(140, 109, 211)
Peach: color(253, 122, 131)
Lettuce Green: color(53, 204, 153)

### Extension 

Do you intend to extend a piece that you've created throughout the semester? What elements are you adding or subtracting from the previous piece? How do these extensions/subtractions further develop the conceptual and interactive elements of your work?

I am extending my piece from second and third piece. First of all, I am using text mining methods for the piece with R, Mallet, and LDA for exploratory data analysis. I used the results of the topic modeling. Secondly, I am using the pantone colors in the second sketch for the user to create their own art which I have used in both previous works. The elements that are adding to the previous works are the second sketch for user interaction for defining art and images of artists popping up when the mouse is clicked. 

![Previous Piece](/images/project3.png)

### Drawing or Sketch of Extended Piece

![Sketch of Extended Piece](/images/finalproject_storyboard.jpg)

### Technical Details

#### No. 1 Sketch

* Libraries
p5.dom.js
p5.sound.js

* Hosting Platform
[Jo's ART](https://kwonjo.github.io/visualization_interactivegraphics/sketch6.html)

* Explanation of your codebase  

1. Load Data
The table of the data is loaded into p5.js. 

2. Load Sound
The short sound clip by Joey Pecoraro's *Ask For Love* is loaded. 

3. Load Font
Typewriter font is loaded on p5.js. 

4. Clusters and nodes
Daniel Shiffman's The Nature of Code's physics libraries were used for creating clusters and nodes. 

5. Mouse Is Pressed 
When mouse is pressed, the image appears on the screen. 


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

function loadData(){
    //Access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    ONE = table.getColumn("ONE");
    TWO = table.getColumn("TWO");
    THREE = table.getColumn("THREE");
    FOUR = table.getColumn("FOUR");
    FIVE = table.getColumn("FIVE");
    console.log(ONE);
}

function draw(){
  
  //Update the physics world
  physics.update();
  background(50,51,57); //moss
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
  if (mouseIsPressed) {
    image(img, 0, 0, img.width/1.3, img.height/1.3);
    //text
    textSize(40);
    var s = '“I want to touch people with my art.”';
    fill(223,226,210);
    text(s, 430, 0, 400, 400); 
  }
}

```

#### No. 1 Sketch

* Libraries
p5.dom.js
p5.sound.js

* Hosting Platform
[Jo's ART](https://kwonjo.github.io/visualization_interactivegraphics/sketch6.html)

* Explanation of your codebase  

1. Load Sound
The short sound clip by Joey Pecoraro's *Give Me Something* is loaded. This song is chosen to tell the user to give me something that defines “art.”

2. Key Pressed
This enables the users to change colors of their color strokes between R(peach), G(lettuce green), and P(purple).  

```js
function mouseDragged() 
{ 
	strokeWeight(10);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(253, 122, 131);
    }
    if(key == 'g' || key == 'G')
	{
		c = color(153, 204, 153);
    }
    if(key == 'p' || key == 'P')
	{
		c = color(140, 109, 211);
	}
}
```

