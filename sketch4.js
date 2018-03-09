var bubbles;
var table;
var fontItalic;
var mySound;
var angles = [90, 90, 90, 90];
var colors = ['#35CC99', '#FD7A83', '#8C6DD3', '#311938'];
var pieChart;
// Reference to physics world
let physics;
// A list of cluster objects
let cluster;
// Boolean that indicates whether we draw connections or not
let showPhysics = true;
let showParticles = true;

function preload(){
  //data
  //table = loadTable('aifilms/ai_data.csv', 'csv', 'header');
  //font
  fontItalic = loadFont('images/typewriter.ttf');
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/themoonsong.m4a');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //data
  //loadData();
  //sound loop on going
  mySound.loop(); 
  //print words and show in console
  //var tableArray = table.getArray();
  //print(table.getRowCount() + 'total rows in table');
  //print(table.getColumnCount() + 'total columns in table')
  //print(table.getColumn('name'));

  noStroke();
  noLoop(); 

  createP("'p' to display or hide particles<br>'c' to display or hide connections<br>'n' for new graph");

  // Initialize the physics
  physics = new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0, 0, width, height));
  
  // Spawn a new random graph
  cluster = new Cluster(8, 100, new Vec2D(width / 2, height / 2));
}

function draw(){

  // Update the physics world
  physics.update();
  background(49, 25, 56); //dark violet

  //pieChart
  pieChart(150, angles);

  // Update physics
  physics.update();
  // Display all points
  if (showParticles) {
    cluster.display();
  }

  // If we want to see the physics
  if (showPhysics) {
    cluster.showConnections();
  }
}


// Key press commands
function keyPressed() {
  if (key == 'c' || key == 'C') {
    showPhysics = !showPhysics;
    if (!showPhysics) showParticles = true;
  } 
  else if (key == 'p' || key == 'P') {
    showParticles = !showParticles;
    if (!showParticles) showPhysics = true;
  } 
  else if (key == 'n' || key == 'N') {
    physics.clear();
    cluster = new Cluster(Math.floor(random(2, 20)), random(10, height-100), new Vec2D(width/2, height/2));
  }
}

function loadData(){
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  //bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++){
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    //var keyword = row.get("keyword");
    //var frequency = row.get("frequency");
    //var intersectionAI = row.get("intersectionAI");
    var goodbye = row.get("Goodbye");
    // Make a Bubble object out of the data read
    //bubbles[i] = new Bubble(random(100, 1100), random(100, 800), keyword, frequency, intersectionAI);
  }
}


function mousePressed(){
  if (mySound.isPlaying()){ //.isPlaying() returns a boolean
    mySound.stop();
  } else {
    mySound.play();
  }
}

//piechart relocate
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
//piechart
function pieChart(diameter, data){
    var lastAngle = 0;
    for(var i = 0; i < data.length; i++){
      fill(color(colors[i]));
      arc(0 + windowWidth/10, 0 + windowWidth/10, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
      lastAngle += radians(angles[i]);
    }
}