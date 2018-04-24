var x=0;
var table;
var fontItalic;
var mySound;
var img;
// Reference to physics world
let physics;
// 5 clusters 
let cluster;
let cluster2;
let cluster3;
let cluster4;
let cluster5;
// 5 topics
var ONE;
var TWO;
var THREE;
var FOUR;
var FIVE;
// Boolean that indicates whether we draw connections or not
let showPhysics = true;
let showParticles = true;

function preload(){
  //data
  table = loadTable('data/art_data.csv', 'csv', 'header');
  console.log(table);
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/askforlove.m4a');
  //font
  fontItalic = loadFont('images/typewriter.ttf');
  //image
  img =loadImage('images/artists.png');
}

function setup(){
  createCanvas(1570, 780);
  //load data from art_data
  loadData();
  //sound looping
  mySound.loop(); 
  //instructions for display
  createP("'p' to display or hide particles<br>'c' to display or hide connections<br>");

  //Initialize the physics
  physics = new VerletPhysics2D();
  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));
  // Spawn a new random graph
  // cluster = new Cluster(number of nodes, distance of connections, x, y);
  cluster = new Cluster(20, 150, new Vec2D(300, 150), ONE);//first
  cluster2 = new Cluster(20, 250, new Vec2D(250, 500), TWO); //second row first
  cluster3 = new Cluster(20, 300, new Vec2D(620, 300), THREE); //first row second 
  cluster4 = new Cluster(20, 220, new Vec2D(1350, 200), FOUR); //first row third
  cluster5 = new Cluster(20, 350, new Vec2D(1050, 530), FIVE);
}

function loadData(){
    //Access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    ONE = table.getColumn("ONE");
    TWO = table.getColumn("TWO");
    THREE = table.getColumn("THREE");
    FOUR = table.getColumn("FOUR");
    FIVE = table.getColumn("FIVE");
    console.log(ONE); //show that data is loaded
}

function draw(){
  
  //Update the physics world
  physics.update();
  background(50,51,57); //moss river
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
    fill(223,226,210); //limestone
    text(s, 430, 0, 400, 400); 
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
