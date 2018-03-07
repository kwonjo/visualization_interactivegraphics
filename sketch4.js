var bubbles;
var table;
var fontItalic;
var mySound;
var angles = [90, 90, 90, 90];
var colors = ['#35CC99', '#FD7A83', '#8C6DD3', '#311938'];
var pieChart;

function preload(){
  //data
  table = loadTable('data/AIsearch.csv', 'header');
  //font
  fontItalic = loadFont('images/typewriter.ttf');
  //music
  soundFormats('m4a'); 
  mySound = loadSound('sound/themoonsong.m4a');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //data
  loadData();
  //sound loop on going
  mySound.loop(); 
  //print words and show in console
  var tableArray = table.getArray();
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table')
  print(table.getColumn('name'));

  noStroke();
  noLoop(); 
}

function draw(){
  background(49, 25, 56); //dark violet
  //move
  push();
  translate((windowWidth/4-1200), (windowHeight/4-700));
  //pieChart
  pieChart(150, angles);
  pop();
  // Display all bubbles
  translate(0,0);
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].display();
  }

}

function loadData(){
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++){
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var keyword = row.get("keyword");
    var frequency = row.get("frequency");
    var intersectionAI = row.get("intersectionAI");
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(random(100, 1100), random(100, 800), keyword, frequency, intersectionAI);
  }
}

class Bubble{
  constructor(tempX, tempY, tempKeyword, tempFrequency, tempIntersectionAI){
    this.x = tempX;
    this.y = tempY;
    this.keyword = String(tempKeyword);
    this.frequency = Number(tempFrequency);
    this.intersectionAI = Number(tempIntersectionAI);
}

// Display the Bubble
display() {
    stroke(253, 122, 131);
    fill(253, 122, 131); //peach
    ellipse(this.x, this.y, (this.frequency)/100, (this.intersectionAI)/100);
    textAlign(CENTER);
    textFont(fontItalic);
    textSize(20);
    
    text(this.keyword, this.x, this.y-20);
    text(this.frequency, this.x, this.y+20);
}

}

function mousePressed(){
  if (mySound.isPlaying()){ //.isPlaying() returns a boolean
    mySound.stop();
  } else {
    mySound.play();
  }
}

//piechart
function pieChart(diameter, data){
    var lastAngle = 0;
    for(var i = 0; i < data.length; i++){
      fill(color(colors[i]));
      arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
      lastAngle += radians(angles[i]);
    }
}