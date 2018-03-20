var x=0;
var speed=1;
var bubbles;
var table;
var fontItalic;
var mySound;
var angles = [90, 90, 90, 90];
var colors = ['#35CC99', '#FD7A83', '#8C6DD3', '#311938'];
var pieChart;
// Reference to physics world
let physics;
// 10 clusters 
let cluster;
let cluster2;
let cluster3;
let cluster4;
let cluster5;
let cluster6;
let cluster7;
let cluster8;
let cluster9;
let cluster10;

var bye;
var struggle;
var theo;
var individual;
var david;
var Family;
var Abstract;
var relationships;
var Robots;
var Emotions;

// Boolean that indicates whether we draw connections or not
let showPhysics = true;
let showParticles = true;

function preload(){
  //data
  table = loadTable('data/ai_data.csv', 'csv', 'header');
  //font
  fontItalic = loadFont('images/typewriter.ttf');
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/themoonsong.m4a');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  loadData();

  // print words and show in console
  var tableArray = table.getArray();
  /*print(table.getRowCount() + 'total rows in table');
  print(table.getColumnCount() + 'total columns in table')
  print(table.getColumn('name'));*/

  //cycle through the table
  for (var r = 0; r < table.getRowCount(); r++)
    for (var c = 0; c < table.getColumnCount(); c++){
      //print(table.getString(r, c));
    }
  //noStroke();
  createP("'p' to display or hide particles<br>'c' to display or hide connections<br>");

  // Initialize the physics
  physics = new VerletPhysics2D();
  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));
  
  // Spawn a new random graph
  // cluster = new Cluster(number of nodes, distance of connections, x, y);
  cluster = new Cluster(20, 110, new Vec2D(330, 150));
  cluster2 = new Cluster(20, 230, new Vec2D(200, 450));
  cluster3 = new Cluster(20, 150, new Vec2D(600, 200));
  cluster4 = new Cluster(20, 170, new Vec2D(900, 180));
  cluster5 = new Cluster(20, 130, new Vec2D(550, 460));
  cluster6 = new Cluster(20, 350, new Vec2D(1000, 510));//overlap on purpose
  cluster7 = new Cluster(20, 220, new Vec2D(1300, 200));
  cluster8 = new Cluster(20, 250, new Vec2D(1400, 600));
  cluster9 = new Cluster(20, 200, new Vec2D(700, 700));
  cluster10 = new Cluster(20, 140, new Vec2D(280, 730));
}

function draw(){
  // Update the physics world
  physics.update();
  background(49, 25, 56); //dark violet
  noStroke();
  // pieChart
  pieChart(150, angles);

  // Update the physics world
  physics.update();
  // Text in particles
  textAlign(CENTER);
  //text(table.value(), windowWidth/2, windowHeight/2);
  // Display all points
  if (showParticles) {
    cluster.display();
    cluster2.display();
    cluster3.display();
    // cluster4.display();
    // cluster5.display();
    // cluster6.display();
    // cluster7.display();
    // cluster8.display();
    // cluster9.display();
    // cluster10.display();
  }

  // If we want to see the physics
  if (showPhysics) {
    cluster.showConnections();
    cluster2.showConnections();
    cluster3.showConnections();
    // cluster4.showConnections();
    // cluster5.showConnections();
    // cluster6.showConnections();
    // cluster7.showConnections();
    // cluster8.showConnections();
    // cluster9.showConnections();
    // cluster10.showConnections();
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
  // else if (key == 'n' || key == 'N') {
  //   physics.clear();
  //   console.log('n pressed');
  //   cluster = new Cluster(20, random(10, height-100), new Vec2D(width/2, height/2));
  // }
}

function loadData(){
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  //bubbles = []; 
  // for (var i = 0; i < 38; i++){
  //   words[i].display();
    
  // Access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++){
    var row = table.getRow(i);
    //Access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    bye = row.get("Bye");
    struggle = row.get("Struggle");
    theo = row.get("Theo");
    individual = row.get("Individual");
    david = row.get("David");
    Family = row.get("Family");
    Abstract = row.get("Abstract");
    relationships = row.get("Relationships");
    Robots = row.get("Robots");
    Emotions = row.get("Emotions");
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

// piechart relocate
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
// piechart
function pieChart(diameter, data){
    var lastAngle = 0;
    for(var i = 0; i < data.length; i++){
      fill(color(colors[i]));
      arc(0 + windowWidth/10, 0 + windowWidth/10, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
      lastAngle += radians(angles[i]);
    }
}