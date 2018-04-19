var x=0;
var speed=1;
var bubbles;
var table;
var fontItalic;
var mySound;
// Reference to physics world
let physics;
// 5 clusters 
let cluster;
let cluster2;
let cluster3;
let cluster4;
let cluster5;
// 5 topics
var bye;
var struggle;
var theo;
var individual;
var david;


// Boolean that indicates whether we draw connections or not
let showPhysics = true;
let showParticles = true;

function preload(){
  //data
  table = loadTable('data/ai_data.csv', 'csv', 'header');
  console.log(table);
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/askforlove.m4a');
  //font
  fontItalic = loadFont('images/typewriter.ttf');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  loadData();

  createP("'p' to display or hide particles<br>'c' to display or hide connections<br>");

  // Initialize the physics
  physics = new VerletPhysics2D();
  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));
  // Spawn a new random graph
  // cluster = new Cluster(number of nodes, distance of connections, x, y);
  cluster = new Cluster(20, 130, new Vec2D(330, 150), bye);
  cluster2 = new Cluster(20, 230, new Vec2D(200, 450), struggle);
  cluster3 = new Cluster(20, 150, new Vec2D(600, 200), theo);
  cluster4 = new Cluster(20, 170, new Vec2D(900, 180), individual);
  cluster5 = new Cluster(20, 160, new Vec2D(550, 460), david);
}

function loadData(){
    //Access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    bye = table.getColumn("Bye");
    struggle = table.getColumn("Struggle");
    theo = table.getColumn("Theo");
    individual = table.getColumn("Individual");
    david = table.getColumn("David");
    console.log(bye)
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

// piechart relocation
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}