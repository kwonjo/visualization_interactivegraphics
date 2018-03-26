var x=0;
var speed=1;
var bubbles;
var table;
var fontItalic;
var mySound;
var angles = [120, 120, 120];
var colors = ['#35CC99', '#FD7A83', '#311938'];
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
// 10 topics
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
  console.log(table);
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/themoonsong.m4a');
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
  cluster6 = new Cluster(20, 350, new Vec2D(1000, 510), Family);//overlap on purpose
  cluster7 = new Cluster(20, 220, new Vec2D(1300, 200), Abstract);
  cluster8 = new Cluster(20, 250, new Vec2D(1400, 600), relationships);
  cluster9 = new Cluster(20, 200, new Vec2D(700, 700), Robots);
  cluster10 = new Cluster(20, 140, new Vec2D(280, 730), Emotions);
}

function loadData(){
    //Access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    bye = table.getColumn("Bye");
    struggle = table.getColumn("Struggle");
    theo = table.getColumn("Theo");
    individual = table.getColumn("Individual");
    david = table.getColumn("David");
    Family = table.getColumn("Family");
    Abstract = table.getColumn("Abstract");
    relationships = table.getColumn("Relationships");
    Robots = table.getColumn("Robots");
    Emotions = table.getColumn("Emotions");
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
    cluster6.display();
    cluster7.display();
    cluster8.display();
    cluster9.display();
    cluster10.display();
  }

  // If we want to see the physics
  if (showPhysics) {
    cluster.showConnections();
    cluster2.showConnections();
    cluster3.showConnections();
    cluster4.showConnections();
    cluster5.showConnections();
    cluster6.showConnections();
    cluster7.showConnections();
    cluster8.showConnections();
    cluster9.showConnections();
    cluster10.showConnections();
  }
  
  // pieChart
  noStroke();
  pieChart(150, angles);
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
// piechart
function pieChart(diameter, data){
    var lastAngle = 0;
    for(var i = 0; i < data.length; i++){
      fill(color(colors[i]));
      arc(0 + windowWidth/15, 0 + windowWidth/10, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
      lastAngle += radians(angles[i]);
    }
}